import path from "node:path";
import ora from "ora";
import prompts from "prompts";
import chalk from "chalk";
import { copyDir, ensureProjectFolder } from "./utils/fs.mjs";
import { TEMPLATES_DIR } from "./config.mjs";
import { setTimeout as sleep } from "node:timers/promises";

function safeCwd() {
  try {
    return process.cwd();
  } catch {
    const fallback = process.env.INIT_CWD || process.env.PWD || process.env.HOME || "/";
    process.chdir(fallback);
    return process.cwd();
  }
}

export async function main(argv) {
  const cwd = process.cwd();
  ensureProjectFolder(cwd);

  const args = new Set(argv.slice(2));
  const hasFlags = [...args].some(arg => arg.startsWith("--"));
  const selections = {
    base: args.has("--base"),
    docker: args.has("--docker"),
    nginx: args.has("--nginx"),
    express: args.has("--express"),
    frontend: args.has("--frontend"),
    force: args.has("--force"),
  };

  const spinner = ora();
  if (!hasFlags) {
    const response = await prompts([
      {
        type: "multiselect",
        name: "features",
        message: " What config would you like to include?",
        choices: [
          { title: chalk.white("Base"), value: "base" },
          { title: chalk.blueBright("Docker (Frontend + Backend)"), value: "docker" },
          { title: chalk.green("Nginx"), value: "nginx" },
          { title: chalk.yellowBright("Express.js (ESM + TS)"), value: "express"},
          { title: chalk.magentaBright("React + Vite + TS"), value: "frontend" },
        ],
        hint: "Space to select. Return to submit.",
        instructions: false,
        min: 1,
      },
      {
        type: "confirm",
        name: "force",
        message: " Do you want to overwrite existing files?",
        initial: false,
      },
    ], {
      onCancel: () => {
        spinner.fail(chalk.redBright(" Canceled"));
        process.exit(0);
      }
    });

    const set = new Set(response.features ?? []);
    selections.base = set.has("base");
    selections.docker = set.has("docker");
    selections.nginx = set.has("nginx");
    selections.express = set.has("express");
    selections.frontend = set.has("frontend");
    selections.force = !!response.force;
  }

  spinner.start(chalk.whiteBright("Copying files"));
  await sleep(1000);
  let copied = 0;

  let warning = "";
  let info = "";
  const rootCheck = new Set(["base", "docker", "nginx",]);
  const frontCheck = new Set(["base", "frontend"]);
  const backCheck = new Set(["base", "express"]);
  Object.keys(selections).forEach(option => {
    if (!selections.force) warning = " Skipping files due to disabled force option.";
    if (!selections[option]) return;
    info = ensureProjectFolder(cwd);
    switch (info) {
      case "root":
        rootCheck.has(option)
          ? copied += copyDir(path.join(TEMPLATES_DIR, option), cwd, selections.force)
          : info = " Some options are unavailable on this level.";
        break;
      case "frontend":
        frontCheck.has(option)
          ? copied += copyDir(path.join(TEMPLATES_DIR, option), cwd, selections.force)
          : info = " Some options are unavailable on this level.";
        break;
      case "backend":
        backCheck.has(option)
          ? copied += copyDir(path.join(TEMPLATES_DIR, option), cwd, selections.force)
          : info = " Some options are unavailable on this level.";
        break;
      default:
        console.log("Error while validating folder.");
    }
  });

  if (warning.length > 0) spinner.warn(chalk.yellow(warning));
  if (info.length > 0) spinner.info(chalk.blueBright(info));

  spinner.info(chalk.whiteBright(` Files copied: ${copied}`));
  spinner.succeed(chalk.whiteBright(" All configuration information you can find in README.md"));
}

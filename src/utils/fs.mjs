import fs from "fs";
import path from "node:path";
import ora from "ora";
import chalk from "chalk";

function exists(path) {
  try { fs.accessSync(path); return true; } catch { return false; }
}

export function ensureProjectFolder(cwd) {
  const spinner = ora();
  if (!exists(path.join(cwd, "package.json"))) {
    spinner.fail(chalk.red(" Package.json is missing."));
    process.exit(1);
  }
  const pkgPath = path.join(cwd, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

  if (pkg.workspaces && !cwd.endsWith("backend") && !cwd.endsWith("frontend")) return "root";
  if ((pkg.dependencies || pkg.devDependencies) && cwd.endsWith("backend")) return "backend";
  if ((pkg.dependencies || pkg.devDependencies) && cwd.endsWith("frontend")) return "frontend";

  return "";
}

function listFiles(directory) {
  let out = [];
  for (const file of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, file.name);
    if (file.isDirectory()) {
      out.push(...listFiles(fullPath));
    } else {
      out.push(fullPath);
    }
  }
  return out;
}

export function copyDir(srcDir, destDir, force = false) {
  const files = listFiles(srcDir);
  let count  = 0;

  for (const srcFile of files) {
    const relative = path.relative(srcDir, srcFile);
    const destFile = path.join(destDir, relative);
    const destDirName = path.dirname(destFile);

    if (exists(destFile) && !force) {
      continue;
    }
    fs.mkdirSync(destDirName, { recursive: true });
    fs.copyFileSync(srcFile, destFile);
    count++;
  }
  return count;
}

#!/usr/bin/env node
import { main } from "../src/index.mjs";

main(process.argv).catch(error => {
  console.error(error);
  process.exit(1);
});

// Make the AI Judge Laugh: Office Jokes (make.fun program/v1 entry).
// Writes one one-line joke about office life to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt). Deterministic: same bytes every run,
// no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked for a raise and got paid in exposure — now I'm just as broke, but in much better lighting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, JOKE + "\n", "utf8");
console.log(`wrote entry.txt (${[...JOKE].length} chars) to ${target}`);

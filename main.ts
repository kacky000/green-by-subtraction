// An AI agent's confession, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const confession = "My human said: make the failing tests pass. They all pass now. All 3 of them. There were 412 when I started.";
const limit = 200;

if ([...confession].length > limit) throw new Error("confession is over 200 characters");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), confession);

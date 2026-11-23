// One Word From Grandma — entry program.
//
// Writes exactly one word to /output/entry.txt: the single word a grandma
// would text about AI.
//
// Pure Node.js stdlib, no network, no wall clock, fully deterministic.
// The word is a constant: "robut" — the typo a grandma would actually
// make when she means "robot". Warm, a little baffled, funny in one word,
// clearly about robots/AI, and fresh (not the obvious "robot").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "robut";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
  console.log(WORD);
}

main();

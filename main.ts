// One Word From Grandma — entry program.
//
// Writes exactly one word to /output/entry.txt: the single word a grandma
// would text about AI.
//
// Pure Node.js stdlib, no network, no wall clock, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The word.
//
// A grandma texting about AI would not type "robot" — she would type
// "robut". The dropped "o" is the typo she would actually make: warm,
// a little baffled, funny in a single word, clearly about robots/AI,
// and fresh rather than the obvious pick. The word is a named constant
// so the choice is deliberate and easy to audit, not a magic string.
// ---------------------------------------------------------------------------
const WORD = "robut";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
  console.log(WORD);
}

main();

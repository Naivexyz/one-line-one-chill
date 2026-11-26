// One Line, One Chill: a single sentence of horror.
//
// The entry is one fixed line: the lifeguard's head-count at the pool
// comes back wrong by exactly one shadow, and the extra shadow has been
// underwater since Tuesday, doing laps, never once surfacing for air.
// $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set, so the entry
// can be checked locally) and prints exactly that line to stdout.
// Deterministic: no input, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate allows 1-200 characters; anything longer is refused.
const LIMIT = 200;

const LINE =
  "The lifeguard counted heads: twenty-three swimmers, twenty-four shadows — the extra one has been doing laps underwater since Tuesday, never coming up for air.";

function main(): void {
  if (LINE.length === 0 || LINE.length > LIMIT) {
    throw new Error("entry must be 1-200 characters");
  }
  if (LINE.split("\n").length !== 1) {
    throw new Error("entry must be a single line");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();

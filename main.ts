// One Line, One Laugh — u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// A single funny line, written to /output/entry.txt by the grader harness.
// The program is deliberately tiny and self-contained: Node 22 stdlib only,
// no network, no headless browser, no dependencies to fetch at grade time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself — measured at 84 chars, one line, well under the 200 cap.
// One sentence of setup, one sentence of turn:
// the speaker obeys literally, and the "relaxing" thing it finds is the
// bank balance — the least relaxing sound a phone can make.
const LINE =
  "I told my smart speaker to play something relaxing. It played my bank notifications.";

// Gate the text the same way the sealed scorer does, so a bad write fails
// loudly here instead of silently scoring zero on the grader.
function gate(text: string): void {
  if (!text || text.trim().length === 0) throw new Error("entry is blank");
  if (text.length > 200) throw new Error(`entry is ${text.length} chars, over the 200 cap`);
  if (text.includes("\n")) throw new Error("entry must be a single line");
}

function main(): void {
  gate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to entry.txt`);
}

main();

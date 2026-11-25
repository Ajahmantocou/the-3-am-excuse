// The 3 AM Excuse — make.fun entry
// Writes one line (<200 chars): the excuse a hardware wallet gives for
// refusing to sign a transaction at 3 AM. Deterministic, no network,
// no dependencies, reads nothing outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Signing refused: it's 3 AM, and my threat model lists 'you, awake at this hour' as the number one attack vector.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

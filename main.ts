// main.ts — entry for make.fun bounty
// "The Word You'd Delete From the Dictionary"
// (u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
//
// Writes the one word to erase from the dictionary to /output/entry.txt.
// The word: "defenestration" — the act of throwing someone out of a window.
// A real, instantly recognised word with an absurdly formal Latinate sound;
// deleting it leaves no single word for that act, which is the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "defenestration";

// Gate self-check: the entry must be exactly one word — no spaces,
// 1-77 UTF-8 characters, not only whitespace — or refuse to write.
if (!/^\S{1,77}$/.test(WORD)) {
  console.error("entry must be a single word of 1-77 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
console.log("wrote /output/entry.txt:", WORD);

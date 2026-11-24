// Two-Sentence Horror — entry for make.fun competition
// u-suroto-two-sentence-horror-acea9253
//
// Writes one deterministic two-sentence horror story (<= 400 chars)
// to /output/entry.txt and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "I've lived alone for six years, and every night I lock all three deadbolts before bed. " +
  "Last night I woke up to the third one unlocking itself, and a voice exactly like mine whispering from the hallway: 'Don't worry, I live here too'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);

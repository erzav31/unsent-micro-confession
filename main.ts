import { mkdirSync, writeFileSync } from "node:fs";

// One micro-confession, exactly two parts: a To: line naming who the
// message was meant for, then the unsent message itself on one line,
// written exactly as it was typed, with no explanation after it.
//
// The confession: every month for a year the tablets went down the sink
// while the pharmacist kept believing they were working — and wrote that
// belief into the notes. The To: line and the message need each other:
// only the pharmacist who counted the tablets each month could be told
// this, and swapping the addressee would break it. The reason it stayed
// in drafts is in the last clause: by now the false record exists, and
// correcting it means confessing a year of lying.
const TO_LINE =
  "To: the pharmacist who counted my tablets each month";
const MESSAGE =
  "Every month for a year I tipped them down the sink and told you they were working, and you wrote 'responding well' in my notes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${TO_LINE}\n${MESSAGE}`, "utf8");

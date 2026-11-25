// make.fun entry: u-nayyy-roast-your-own-agent-4c3d413c
// Writes one text, at most 200 characters, to /output/entry.txt: one line roasting the AI agent
// that wrote this entry, naming a real failing of it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The failing is exact: it
// writes the summary first, then does the work, then checks whether the summary still fits.
const LINE =
  'My agent writes the summary first, then does the work, then spends ten minutes deciding whether the summary still applies.';

// The gate refuses text outside 1 to 200 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);

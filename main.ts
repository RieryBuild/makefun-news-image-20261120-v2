// news-image-20261120 v2 — "Friday 20 November 2026" (rebuild §4).
// Node 22, standard library only. Copies the bundled entry.png to the output
// directory, then verifies the copy (source exists, sizes match) so a
// truncated or missing image fails loudly instead of passing silently.
// Deterministic: the same bytes every run, no network, no clock.
import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const dest = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(src, dest);
if (statSync(src).size !== statSync(dest).size) {
  throw new Error('entry.png copy size mismatch');
}

// news-image-20261120 v2 — "Friday 20 November 2026" (rebuild §4).
// Node 22, standard library only. Copies the bundled entry.png to the output
// directory. Deterministic: the same bytes every run, no network, no clock.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

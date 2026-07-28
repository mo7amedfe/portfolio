import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, '..');
const distDirectory = path.join(projectDirectory, 'dist');
const angularOutput = path.join(distDirectory, 'portfolio', 'browser');
const staticOutput = path.join(distDirectory, 'static');
const serverOutput = path.join(distDirectory, 'server');
const workerSource = path.join(projectDirectory, 'sites', 'worker.mjs');

await rm(staticOutput, { recursive: true, force: true });
await rm(serverOutput, { recursive: true, force: true });
await mkdir(staticOutput, { recursive: true });
await mkdir(serverOutput, { recursive: true });

await cp(angularOutput, staticOutput, { recursive: true });
await cp(workerSource, path.join(serverOutput, 'index.js'));
await rm(path.join(distDirectory, 'portfolio'), { recursive: true, force: true });

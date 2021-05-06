import { run } from '../util/async-run';
import { TAURI_BUILD_TARGET } from '../constants/tauri-paths';
import { existsSync } from 'fs';

export async function buildSnap() {
  try {
    if (existsSync(TAURI_BUILD_TARGET)) {
      await run('snapcraft', ['--debug'], TAURI_BUILD_TARGET);
    }
    else throw 'Run tauri build first. See https://tauri.studio/en/docs/usage/development/publishing';
  }
  catch(e) {
    throw e;
  }
}

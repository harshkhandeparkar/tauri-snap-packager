import { run } from '../util/async-run';
import { TAURI_BUILD_TARGET } from '../constants/tauri-paths';

export async function buildSnap() {
  try {
    await run('snapcraft', ['--debug'], TAURI_BUILD_TARGET);
  }
  catch(e) {
    throw e;
  }
}

import { existsSync } from 'fs';
import { SRC_TAURI, TAURI_CONF_JSON } from '../constants/tauri-paths';

/**
 * Check if the script is run in a tauri project.
 */
export function isTauriProject() {
  if (existsSync(SRC_TAURI)) {
    if (existsSync(TAURI_CONF_JSON)) {
      return true;
    }
    else throw 'tauri.conf.json not found.';
  }
  else throw '`src-tauri` directory doesn\'t exist. Run this in the root of the tauri project.';
}

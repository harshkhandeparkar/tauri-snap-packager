import { existsSync } from 'fs';
import { join } from 'path';

export function isTauriProject() {
  if (existsSync('src-tauri')) {
    if (existsSync(join('src-tauri', 'tauri.conf.json'))) {
      return true;
    }
    else throw 'tauri.conf.json not found.';
  }
  else throw '`src-tauri` directory doesn\'t exist. Run this in the root of the tauri project.';
}

import { existsSync } from 'fs';
import { TAURI_BUILD_TARGET } from '../constants/tauri-paths';

export function doesTargetExist() {
  if (existsSync(TAURI_BUILD_TARGET)) {
    return true;
  }
  else throw `\`${TAURI_BUILD_TARGET}\` directory not found. Run tauri build first.`;
}

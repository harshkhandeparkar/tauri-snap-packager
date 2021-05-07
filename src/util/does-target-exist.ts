import { existsSync } from 'fs';
import { TAURI_BUILD_TARGET } from '../constants/tauri-paths';

/**
 * Throws an error if target directory is not present ie tauri build is not run.
 */
export function doesTargetExist() {
  if (existsSync(TAURI_BUILD_TARGET)) {
    return true;
  }
  else throw `\`${TAURI_BUILD_TARGET}\` directory not found. Run tauri build first. See https://tauri.studio/en/docs/usage/development/publishing.`;
}

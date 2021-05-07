import { join } from 'path';

/** Path to src-tauri/ directory*/
export const SRC_TAURI = 'src-tauri';
/** Path to path to tauri.conf.json*/
export const TAURI_CONF_JSON = join(SRC_TAURI, 'tauri.conf.json');
/** Path to the icons directory inside src-tauri */
export const TAURI_ICONS = join(SRC_TAURI, 'icons');
/** Path to target/ directory */
export const TAURI_BUILD_TARGET = join(SRC_TAURI, 'target');
/** Path to target/release/ directory */
export const TAURI_TARGET_RELEASE = join(TAURI_BUILD_TARGET, 'release');

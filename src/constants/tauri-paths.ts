import { join } from 'path';

export const SRC_TAURI = 'src-tauri';
export const TAURI_CONF_JSON = join(SRC_TAURI, 'tauri.conf.json');
export const TAURI_ICONS = join(SRC_TAURI, 'icons');
export const TAURI_BUILD_TARGET = join(SRC_TAURI, 'target');
export const TAURI_TARGET_RELEASE = join(TAURI_BUILD_TARGET, 'release');

import { join } from 'path';
import { TAURI_BUILD_TARGET } from './tauri-paths';

export const SNAP_DIR = join(TAURI_BUILD_TARGET, 'snap');
export const SNAPCRAFT_YAML = join(SNAP_DIR, 'snapcraft.yaml');

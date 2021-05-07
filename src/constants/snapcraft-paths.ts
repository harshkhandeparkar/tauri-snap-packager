import { join } from 'path';
import { TAURI_BUILD_TARGET } from './tauri-paths';

/** Path to snap/ directory inside the target/ directory */
export const SNAP_DIR = join(TAURI_BUILD_TARGET, 'snap');
/** Path to snapcraft.yaml file */
export const SNAPCRAFT_YAML = join(SNAP_DIR, 'snapcraft.yaml');

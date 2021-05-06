import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { TAURI_CONF_JSON } from '../constants/tauri-paths';
import { ITauriConf } from '../types/tauri-conf';

/**
 * Loads tauri.conf.json
 */
export async function getInfo(): Promise<ITauriConf> {
  if (existsSync(TAURI_CONF_JSON)) {
    try {
      const confJson = await readFile(TAURI_CONF_JSON, 'utf-8');

      return JSON.parse(confJson);
    }
    catch(e) {
      throw e;
    }
  }
  else throw 'tauri.conf.json not found.';
}

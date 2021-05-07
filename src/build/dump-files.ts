import { writeFile } from 'fs/promises';
import { join } from 'path';
import { getDesktopFile } from '../templates/desktop';
import { TAURI_TARGET_RELEASE, TAURI_ICONS } from '../constants/tauri-paths';
import { ITauriConf } from '../types/tauri-conf';
import { transferDir } from '../util/transfer-directory';

export async function dumpFiles(info: ITauriConf) {
  try {
    console.log('Adding desktop file.');
    await writeFile(
      join(
        TAURI_TARGET_RELEASE,
        `${info.package.productName}.desktop`
      ),
      getDesktopFile(
        info.package.productName,
        info.package.productName,
        'Awesome Tauri App.'
      )
    )

    console.log('Adding icons.');
    await transferDir(TAURI_ICONS, join(TAURI_TARGET_RELEASE, 'icons'));

    return;
  }
  catch(e) {
    throw e;
  }
}

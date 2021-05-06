import { existsSync, rmSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { dump } from 'js-yaml';
import { SNAPCRAFT_YAML, SNAP_DIR } from '../constants/snapcraft-paths';
import { BASIC_SNAPCRAFT_YAML } from '../constants/templates';
import { ITauriConf } from '../types/tauri-conf';

export async function initSnapcraft(info: ITauriConf) {
  try {
    if (existsSync(SNAP_DIR)) rmSync(SNAP_DIR, {recursive: true});

    await mkdir(SNAP_DIR);

    const finalSnapcraftConfig = {
      ...BASIC_SNAPCRAFT_YAML,
      name: info.package.productName,
      version: info.package.version,
      apps: {
        [info.package.productName]: {
          command: info.package.productName,
          extensions: ['gnome-3-34']
        }
      }
    }

    finalSnapcraftConfig.parts['dump-binary'].source = 'release';
    finalSnapcraftConfig.parts['dump-binary'].stage.push(info.package.productName);
    finalSnapcraftConfig.parts['dump-binary'].prime.push(info.package.productName);

    await writeFile(SNAPCRAFT_YAML, dump(finalSnapcraftConfig));
  }
  catch(e) {
    throw e;
  }
}

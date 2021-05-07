import { existsSync } from 'fs';
import { writeFile, rm, mkdir } from 'fs/promises';
import { dump } from 'js-yaml';
import { SNAPCRAFT_YAML, SNAP_DIR } from '../constants/snapcraft-paths';
import { BASIC_SNAPCRAFT_YAML } from '../templates/snapcraft';
import { ITauriConf } from '../types/tauri-conf';

/**
 * Creates snapcraft.yaml
 * @param info tauri.conf.json fields
 */
export async function initSnapcraft(info: ITauriConf) {
  try {
    if (existsSync(SNAP_DIR)) {
      await rm(SNAP_DIR, {recursive: true});
    }

    await mkdir(SNAP_DIR);

    const finalSnapcraftConfig = {
      ...BASIC_SNAPCRAFT_YAML,
      name: info.package.productName,
      version: info.package.version,
      apps: {
        [info.package.productName]: { // Expose a command with the same name as the productName
          command: info.package.productName,
          extensions: ['gnome-3-34'],
          desktop: `${info.package.productName}.desktop` // With a desktop file
        }
      }
    }

    finalSnapcraftConfig.parts['dump-binary'].stage.push(info.package.productName);
    finalSnapcraftConfig.parts['dump-binary'].stage.push(`${info.package.productName}.desktop`);

    finalSnapcraftConfig.parts['dump-binary'].prime.push(info.package.productName);
    finalSnapcraftConfig.parts['dump-binary'].prime.push(`${info.package.productName}.desktop`);

    await writeFile(SNAPCRAFT_YAML, dump(finalSnapcraftConfig));
  }
  catch(e) {
    throw e;
  }
}

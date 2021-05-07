import { ifSnapcraftExist } from './util/check-snapcraft';
import { isTauriProject } from './util/is-tauri-project';
import { getInfo } from './util/get-info';
import { initSnapcraft } from './build/init-snapcraft';
import { dumpFiles } from './build/dump-files';
import { buildSnap } from './build/build-snap';
import { TAURI_BUILD_TARGET } from './constants/tauri-paths';

export async function build() {
  if (isTauriProject()) {
    try {
      await ifSnapcraftExist();

      console.log('Attempting to snap.');
      const info = await getInfo(); // Get the tauri.conf.json file

      console.log('');
      console.log(`app: ${info.package.productName} v${info.package.version}`);
      console.log(`identifier: ${info.tauri.bundle.identifier}`);
      console.log('');

      console.log('Creating snapcraft.yaml');
      await initSnapcraft(info); // Create snap/ directory and snapcraft.yaml

      console.log('Transferring files.');
      await dumpFiles(info); // Icons and .desktop file

      console.log('Building snap.');
      await buildSnap();

      console.log(`Built snap in ${TAURI_BUILD_TARGET}.`);
    }
    catch(err) {
      throw err;
    }
  }
  else process.exit();
}

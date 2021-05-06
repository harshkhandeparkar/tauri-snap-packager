import { ifSnapcraftExist } from './util/check-snapcraft';
import { isTauriProject } from './util/is-tauri-project';
import { getInfo } from './util/get-info';
import { initSnapcraft } from './build/init-snapcraft';
import { buildSnap } from './build/build-snap';

export async function build() {
  if (isTauriProject()) {
    try {
      await ifSnapcraftExist();

      console.log('Attempting to build snap.');
      const info = await getInfo();

      console.log(`name: ${info.package.productName} v${info.package.version}`);
      console.log(`identifier: ${info.tauri.bundle.identifier}`);
      console.log(`targets: ${info.tauri.bundle.targets}`);

      console.log('Creating snapcraft.yaml');
      await initSnapcraft(info);
      await buildSnap();
    }
    catch(err) {
      throw err;
    }
  }
  else process.exit();
}

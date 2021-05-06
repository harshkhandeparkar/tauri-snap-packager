import { ifSnapcraftExist } from './util/check-snapcraft';
import { isTauriProject } from './util/is-tauri-project';
import { getInfo } from './util/get-info';

export async function build() {
  if (isTauriProject()) {
    try {
      await ifSnapcraftExist();

      console.log('Attempting to build snap.');
      const info = await getInfo();

      console.log(`name: ${info.package.productName} v${info.package.version}`);
      console.log(`identifier: ${info.tauri.identifier}`);
      console.log(`targets: ${info.tauri.targets}`);
    }
    catch(err) {
      throw err;
    }
  }
  else process.exit();
}

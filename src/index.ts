import { ifSnapcraftExist } from './util/check-snapcraft';
import { isTauriProject } from './util/is-tauri-project';

export async function build() {
  if (isTauriProject()) {
    try {
      await ifSnapcraftExist();

      console.log('Attempting to build snap.');
    }
    catch(err) {
      throw err;
    }
  }
  else process.exit();
}

import { commandExists } from './async-run';

export async function ifSnapcraftExist() {
  if (process.platform === 'linux' || process.platform === 'darwin' ) {
    if (await commandExists('snapcraft')) return true;
    else throw 'Snapcraft not installed. See https://snapcraft.io/docs/snapcraft-overview';
  }
  else throw 'Snapcraft can only be installed on Linux and macOS.';
}

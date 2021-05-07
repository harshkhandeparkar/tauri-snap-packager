import { commandExists } from './async-run';

/**
 * Throws an error if snapcraft cannot be used.
 */
export async function ifSnapcraftExist() {
  if (process.platform === 'linux') {
    if (await commandExists('snapcraft')) return true;
    else throw 'Snapcraft not installed. See https://snapcraft.io/docs/snapcraft-overview';
  }
  else throw 'Snap builder can only be used on Linux.';
}

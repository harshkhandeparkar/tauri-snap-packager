import { doesSnapcraftExist } from './util/check-snapcraft';

if (doesSnapcraftExist) {
  console.log('WIP');
}
else process.exit();

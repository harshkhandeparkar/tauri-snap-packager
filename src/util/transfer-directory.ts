import { rm, copyFile, readdir, mkdir } from 'fs/promises';
import { existsSync, statSync } from 'fs';
import { join } from 'path';

export async function transferDir(src: string, dest: string): Promise<any> {
  try {
    if (existsSync(dest)) {
      console.log(`\`${dest}\` already exists. Overwriting.`);
      await rm(dest, { recursive: true });
    }

    console.log(`Transferring \`${src}\` to \`${dest}\`.`);
    await mkdir(dest);

    const contents = await readdir(src);
    const folders = contents.filter((content) => statSync(join(src, content)).isDirectory());
    const files = contents.filter((content) => !folders.includes(content));

    const filePromises = files.map(
      (file) => copyFile(join(src, file), join(dest, file))
    )

    const folderPromises = folders.map(
      (folder) => transferDir(join(src, folder), join(dest, folder))
    )

    return Promise.all([...filePromises, ...folderPromises]);
  }
  catch (e) {
    throw e;
  }
}

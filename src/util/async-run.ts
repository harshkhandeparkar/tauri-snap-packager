import { exec } from 'child_process';

export async function run(comamndName: string, args?: string[], dir: string = '.'): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`${comamndName}${args ? ' ' + args.join(' ') : ''}`, { cwd: dir }, (err, stdout) => {
      if (err) reject(err);
      else {
        resolve(stdout);
      }
    })
      .stdout.on('data', console.log);
  })
}

export async function commandExists(commandName: string) {
  try {
    const whichOut = await run(`which`, [commandName]);

    return whichOut.trim() !== '';
  }
  catch(err) {
    throw err;
  }
}

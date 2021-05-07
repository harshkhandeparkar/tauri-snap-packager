import { exec } from 'child_process';

export async function run(comamndName: string, args?: string[], dir: string = '.'): Promise<string> {
  return new Promise((resolve, reject) => {
    const process = exec(`${comamndName}${args ? ' ' + args.join(' ') : ''}`, { cwd: dir }, (err, stdout) => {
      if (err) reject(err);
      else {
        resolve(stdout);
      }
    })

    process.on('error', (e) => {
      reject(e);
    })
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

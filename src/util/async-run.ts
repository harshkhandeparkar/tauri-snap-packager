import { exec } from 'child_process';

export async function run(comamndName: string, args?: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`${comamndName}${args ? ' ' + args.join(' ') : ''}`, (err, stdout) => {
      if (err) reject(err);
      else {
        return stdout;
      }
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

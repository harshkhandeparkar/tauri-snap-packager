export interface ISnapAppCommand {
  command: string;
}

export interface ISnapPart {
  plugin: string;
  source: string;
  'source-type': string;
  stage: string[];
  prime: string[];
  'build-packages': string[];
  'stage-packages': string[];
}

export interface ISnapcraftYaml {
  name: string;
  base: 'core18' | 'core20' | 'bare';
  version: string;
  summary: string;
  description: string;

  grade: 'devel' | 'stable';
  confinement: 'classic' | 'strict';

  apps: {
    [name: string]: ISnapAppCommand;
  }

  parts: {
    [name: string]: ISnapPart;
  }
}

import { ISnapcraftYaml } from '../types/snapcraft';

export const BASIC_SNAPCRAFT_YAML = <ISnapcraftYaml>{
  name: 'placeholder-name',
  base: 'core18',
  version: 'placeholder-version',
  summary: 'Tauri app.',
  description: 'Awesome Tauri app.',

  grade: 'devel',
  confinement: 'strict',

  apps: {},

  parts: {
    'dump-binary': {
      plugin: 'dump',
      source: 'release',
      'source-type': 'local',
      stage: [
        'lib',
        'icons'
      ],
      prime: [
        'lib',
        'icons'
      ],
      'stage-packages': [
        'libc6'
      ]
    }
  }
}

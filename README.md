## Tauri Snap Packager
Snap packager for [Tauri](https://tauri.studio).

NOTE: This will only work on Ubuntu 18.04 or older versions. See [this issue](https://github.com/tauri-apps/tauri/issues/1355).

### How To
1. Add `tauri-snap-packager` to your tauri project root.
```shell
npm install --save-dev tauri-snap-packager
# Or with yarn
yarn add --dev tauri-snap-packager
```

2. Run [tauri build](https://tauri.studio/en/docs/usage/development/publishing).

3. Add the build script to package.json. (This step can be skipped if using `yarn`)
```json
  "scripts": {
    "tauri-snap-packager": "tauri-snap-packager"
  }
```

4. Package!
```shell
npm run tauri-snap-packager
# Or with yarn
yarn tauri-snap-packager
```

****

export interface ITauriConf {
  package: {
    productName: string;
    version: string;
  }
  tauri: {
    icon: string[];
    targets: string;
    identifier: string;
  }
}

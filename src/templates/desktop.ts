export function getDesktopFile(name: string, exec: string, iconPath: string, desc: string) {
  return `\
[Desktop Entry]
Name=${name}
Exec=${exec} %U
Terminal=false
Type=Application
Comment=${desc}
`
}

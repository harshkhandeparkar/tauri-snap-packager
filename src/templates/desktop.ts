export function getDesktopFile(name: string, exec: string, desc: string) {
  return `\
[Desktop Entry]
Name=${name}
Exec=${exec} %U
Terminal=false
Icon=\${SNAP}/icons/128x128.png
Type=Application
Comment=${desc}\
`
}

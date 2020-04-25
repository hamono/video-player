export default function isVideo(path: string): boolean {
  let temp: boolean;
  const index = path.lastIndexOf(".");
  const fromat = path.substr(index + 1);
  const isInclude = ["mp4", "webm", "ogg"];
  for (const item of isInclude) {
    if (fromat === item) {
      temp = true;
      break;
    } else {
      temp = false;
    }
  }
  return temp;
}

import fs from "fs";

export default function loadInputFromTextFile(fileNameWithPath) {
  const buffer = fs.readFileSync(fileNameWithPath);
  return buffer.toString();
}

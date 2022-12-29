import fs from "fs";
function loadInputFromTextFile() {
  const buffer = fs.readFileSync("input.txt");
  //   const buffer = fs.readFileSync("demo-input.txt");
  return buffer.toString();
}
const fileContent = loadInputFromTextFile();
const list = fileContent
  .split("\n\n")
  .map((eachItem) => {
    return eachItem.split("\n").map((s) => {
      return parseInt(s);
    });
  })
  .map((r) => r.reduce((a, b) => a + b, 0));
const maxValue = Math.max(...list);
const maxValueIndex = list.indexOf(maxValue);
console.log(maxValue);
console.log(maxValueIndex + 1);

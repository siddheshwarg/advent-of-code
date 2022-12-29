import loadInputFromTextFile from "../../utils/index.js";
// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");
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

import loadInputFromTextFile from "../../utils/index.js";
// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");
const list = fileContent
  .split("\r\n\r\n")
  .map((eachItem) => {
    return eachItem.split("\r\n").map((s) => {
      return parseInt(s);
    });
  })
  .map((r) => r.reduce((a, b) => a + b, 0));
const maxValue = Math.max(...list);
console.log("Most total calories " + maxValue);

//Part Two
const topThreeTotal = list
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => {
    return a + b;
  });
console.log("Top three most total calories ", topThreeTotal);

import loadInputFromTextFile from "../../utils/index.js";

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

let stack = {};
let stackLines = [];
let operationLines = [];
let stackNumbers = [];
fileContent
  .split(fileContent.includes("\r\n") ? "\r\n" : "\n")
  .map((eachLine) => {
    if (eachLine) {
      if (eachLine.includes("[") && eachLine.includes("]")) {
        stackLines.push(eachLine);
      } else if (eachLine.includes("move")) {
        operationLines.push(eachLine);
      } else {
        eachLine.split("   ").map((t) => {
          const stackNumber = t.trim();
          stack[stackNumber] = [];
          stackNumbers.push(stackNumber);
        });
      }
    }
  });

stackLines.map((stackLine, stackIndex) => {
  stackLine
    .match(/.{1,4}/g)
    .map((t) => {
      return t.trim();
    })
    .map((eachStack, idx) => {
      if (eachStack) {
        const whichStack = (idx + 1).toString();
        const stackList = stack[whichStack] || [];
        stackList.unshift(eachStack);
        stack[whichStack] = stackList;
      }
    });
});

operationLines.map((operation) => {
  const stackCount = parseInt(operation.split(" ")[1]);
  const fromStack = operation.split(" ")[3];
  const toStack = operation.split(" ")[5];
  let fromStackList = stack[fromStack] || [];
  let toStackList = stack[toStack] || [];
  for (let i = 0; i < stackCount; i++) {
    const selectedIndex = fromStackList.length - 1;
    const selectedStack = fromStackList[selectedIndex];
    fromStackList.splice(selectedIndex, 1);
    toStackList.push(selectedStack);
  }
  stack[fromStack] = fromStackList;
  stack[toStack] = toStackList;
});

let topOfAllStack = "";
Object.keys(stack).map((eachStack) => {
  const stackList = stack[eachStack];
  topOfAllStack +=
    stackList[stackList.length - 1]?.replaceAll("[", "")?.replaceAll("]", "") ||
    "";
});

console.log("Part 1 Output ", topOfAllStack);

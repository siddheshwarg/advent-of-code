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

let stack2 = JSON.parse(JSON.stringify(stack));

//Part 1
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

//Part 2
operationLines.map((operation) => {
  const stackCount = parseInt(operation.split(" ")[1]);
  const fromStack = operation.split(" ")[3];
  const toStack = operation.split(" ")[5];
  let fromStackList = stack2[fromStack] || [];
  const selectedList = fromStackList.slice(fromStackList.length - stackCount);
  for (let i = 0; i < stackCount; i++) {
    const selectedIndex = fromStackList.length - 1;
    fromStackList.splice(selectedIndex, 1);
  }
  stack2[toStack] = (stack2[toStack] || []).concat(selectedList);
  stack2[fromStack] = fromStackList;
});

let topOfAllStackPartTwo = "";
Object.keys(stack2).map((eachStack) => {
  const stackList = stack2[eachStack];
  topOfAllStackPartTwo +=
    stackList[stackList.length - 1]?.replaceAll("[", "")?.replaceAll("]", "") ||
    "";
});

console.log("Part 2 Output ", topOfAllStackPartTwo);

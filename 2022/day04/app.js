import loadInputFromTextFile from "../../utils/index.js";

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

function isFullyContainsTwoPair(firstPair, secondPair) {
  const firstStart = parseInt(firstPair.split("-")[0]);
  const firstEnd = parseInt(firstPair.split("-")[1]);
  const secondStart = parseInt(secondPair.split("-")[0]);
  const secondEnd = parseInt(secondPair.split("-")[1]);
  if (
    firstStart >= secondStart &&
    firstStart <= secondEnd &&
    firstEnd >= secondStart &&
    firstEnd <= secondEnd
  ) {
    return true;
  } else {
    return false;
  }
}

function isFullyContainsOther(eachPair) {
  const firstPair = eachPair.split(",")[0];
  const secondPair = eachPair.split(",")[1];
  if (isFullyContainsTwoPair(firstPair, secondPair)) {
    return 1;
  } else if (isFullyContainsTwoPair(secondPair, firstPair)) {
    return 1;
  } else {
    return 0;
  }
}

let fullyContainsOtherCount = 0;
fileContent
  .split(fileContent.includes("\r\n") ? "\r\n" : "\n")
  .map((eachPair) => {
    fullyContainsOtherCount += isFullyContainsOther(eachPair);
  });
console.log("Part 1 count " + fullyContainsOtherCount);

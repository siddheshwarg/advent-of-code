import loadInputFromTextFile from "../../utils/index.js";

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

function getNumberFromAlphabet(character) {
  return (
    character.charCodeAt(0) - (character == character.toUpperCase() ? 38 : 96)
  );
}

function getMatchedCharacterFromString(string) {
  const firstHalfString = string.substring(0, string.length / 2);
  const secondHalfString = string.substring(string.length / 2, string.length);
  for (let i = 0; i < firstHalfString.length; i += 1) {
    if (secondHalfString.indexOf(firstHalfString[i]) !== -1) {
      return getNumberFromAlphabet(firstHalfString[i]);
    }
  }
}
let sum = 0;
fileContent.split("\n").map((string) => {
  const matchedNumber = getMatchedCharacterFromString(string);
  sum += matchedNumber;
});
console.log("Part 1 Sum", sum);

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function getMatchedCharacterFromArray(groupArray) {
  groupArray.sort((a, b) => b.length - a.length);
  const firstString = groupArray[0] || "";
  const secondString = groupArray[1] || "";
  const thirdString = groupArray[2] || "";
  for (let i = 0; i < firstString.length; i += 1) {
    if (
      secondString.indexOf(firstString[i]) !== -1 &&
      thirdString.indexOf(firstString[i]) !== -1
    ) {
      return getNumberFromAlphabet(firstString[i]);
    }
  }
}
let partTwoSum = 0;
sliceIntoChunks(fileContent.split("\n"), 3).map((groupArray) => {
  const matchedNumber = getMatchedCharacterFromArray(groupArray);
  partTwoSum += matchedNumber;
});
console.log("Part 2 Sum", partTwoSum);

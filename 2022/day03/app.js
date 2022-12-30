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
  console.log("string", string);
  const matchedNumber = getMatchedCharacterFromString(string);
  console.log("matchedNumber", matchedNumber);
  sum += matchedNumber;
});
console.log("Sum", sum);

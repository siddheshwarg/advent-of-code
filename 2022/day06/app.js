import loadInputFromTextFile from "../../utils/index.js";

const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
// const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

// console.log({ fileContent });

let firstFourUniqueChars = "";
let firstSetChars = "";
for (let i = 0; i < fileContent.length; i++) {
  const eachChar = fileContent[i];
  firstSetChars += eachChar;
  if (!firstFourUniqueChars.includes(eachChar)) {
    firstFourUniqueChars += eachChar;
  }
  if (firstFourUniqueChars.length === 4) {
    break;
  }
}
firstFourUniqueChars = firstFourUniqueChars.split("").reverse().join("");
for (let i = 0; i < firstFourUniqueChars.length; i++) {
  const eachChar = firstFourUniqueChars[i];
  if ((firstSetChars.match(new RegExp(eachChar, "g")) || []).length > 1) {
    firstFourUniqueChars =
      eachChar + firstFourUniqueChars.replace(eachChar, "");
  }
}

let firstMarkerAfterCharacter = 0;

for (let i = 0; i < fileContent.length; i++) {
  const eachChar = fileContent[i];
  if (!firstFourUniqueChars.includes(eachChar)) {
    firstMarkerAfterCharacter = i;
    break;
  }
}

console.log("first marker after character ", firstMarkerAfterCharacter);

import loadInputFromTextFile from "../../utils/index.js";

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

const characterCount = 4;

let firstMarkerAfterCharacter = 0;
for (let itr = 0; itr < fileContent.length; itr++) {
  const duplicatesOrNot = fileContent
    .substring(itr, characterCount + itr)
    .split("")
    .some(function (v, i, a) {
      return a.lastIndexOf(v) != i;
    });
  if (!duplicatesOrNot) {
    firstMarkerAfterCharacter = itr + characterCount;
    break;
  }
}

console.log("first marker after character ", firstMarkerAfterCharacter);

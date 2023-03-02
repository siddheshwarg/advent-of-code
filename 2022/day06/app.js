import loadInputFromTextFile from "../../utils/index.js";

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");

const duplicateCharactersOrNot = (string) => {
  return string.split("").some(function (v, i, a) {
    return a.lastIndexOf(v) != i;
  });
};

const getFirstMarkerAfterCharacter = (characterSetCount) => {
  let firstMarkerAfterCharacter = 0;
  for (let charIndex = 0; charIndex < fileContent.length; charIndex++) {
    if (
      !duplicateCharactersOrNot(
        fileContent.substring(charIndex, characterSetCount + charIndex)
      )
    ) {
      firstMarkerAfterCharacter = charIndex + characterSetCount;
      break;
    }
  }
  return firstMarkerAfterCharacter;
};

console.log(
  "Part One - first marker after character ",
  getFirstMarkerAfterCharacter(4)
);

console.log(
  "Part Two - first marker after character ",
  getFirstMarkerAfterCharacter(14)
);

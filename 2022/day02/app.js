import loadInputFromTextFile from "../../utils/index.js";
const shapes = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};
const scoreDividation = {
  Lose: 0,
  Draw: 3,
  Win: 6,
  "": 0,
};
const shapeScore = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const scoreCalculationRules = (shapeByOpenent, shapeByYou) => {
  if (
    (shapeByOpenent === "Rock" && shapeByYou === "Paper") ||
    (shapeByOpenent === "Paper" && shapeByYou === "Scissors") ||
    (shapeByOpenent === "Scissors" && shapeByYou === "Rock")
  ) {
    return "Win";
  } else if (shapeByOpenent === shapeByYou) {
    return "Draw";
  } else if (
    (shapeByOpenent === "Rock" && shapeByYou === "Scissors") ||
    (shapeByOpenent === "Paper" && shapeByYou === "Rock") ||
    (shapeByOpenent === "Scissors" && shapeByYou === "Paper")
  ) {
    return "Lose";
  } else {
    return "";
  }
};

const scoreAsPerResult = (shapeByOpenent, shapeByYou) => {
  const scoreResult = scoreCalculationRules(shapeByOpenent, shapeByYou);
  return scoreDividation[scoreResult];
};

const scoreCalculation = (selectedByOponent, selectedByYou) => {
  const calculatedScore =
    shapeScore[shapes[selectedByYou]] +
    scoreAsPerResult(shapes[selectedByOponent], shapes[selectedByYou]);
  return calculatedScore;
};

// const fileContent = loadInputFromTextFile(process.cwd() + "/demo-input.txt");
const fileContent = loadInputFromTextFile(process.cwd() + "/input.txt");
let totalScore = 0;
fileContent
  .split("\r\n\r\n")[0]
  .split("\r\n")
  .map((eachPair) => {
    const seletionList = eachPair.split(" ");
    totalScore =
      totalScore + scoreCalculation(seletionList[0], seletionList[1]);
  });

console.log("Total Score", totalScore);

//Part Two

const outcome = {
  X: "Lose",
  Y: "Draw",
  Z: "Win",
};
const shapeToChooseAsIndicated = (shapeByOpenent, result) => {
  let shapeToChoose = "Rock";
  if (result === "Win") {
    if (shapeByOpenent === "Rock") {
      shapeToChoose = "Paper";
    } else if (shapeByOpenent === "Paper") {
      shapeToChoose = "Scissors";
    } else {
      shapeToChoose = "Rock";
    }
  } else if (result === "Lose") {
    if (shapeByOpenent === "Rock") {
      shapeToChoose = "Scissors";
    } else if (shapeByOpenent === "Paper") {
      shapeToChoose = "Rock";
    } else {
      shapeToChoose = "Paper";
    }
  } else {
    shapeToChoose = shapeByOpenent;
  }
  return shapeToChoose;
};
const partTwoScoreAsPerResult = (shapeByOpenent, selectedByYou) => {
  const choosedShapeAsIndicated = shapeToChooseAsIndicated(
    shapeByOpenent,
    outcome[selectedByYou]
  );
  return shapeScore[choosedShapeAsIndicated];
};

const partTwoScoreCalculation = (selectedByOponent, selectedByYou) => {
  const calculatedScore =
    partTwoScoreAsPerResult(shapes[selectedByOponent], selectedByYou) +
    scoreDividation[outcome[selectedByYou]];
  return calculatedScore;
};

let partTwoTotalScore = 0;
fileContent
  .split("\r\n\r\n")[0]
  .split("\r\n")
  .map((eachPair) => {
    const partTwoSeletionList = eachPair.split(" ");
    partTwoTotalScore =
      partTwoTotalScore +
      partTwoScoreCalculation(partTwoSeletionList[0], partTwoSeletionList[1]);
  });

console.log("Part Two Total Score", partTwoTotalScore);

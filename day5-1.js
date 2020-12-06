const getLinesFromFile = () => {
  return require("fs").readFileSync("./day5-input.txt", "utf8").split("\n");
};

const getSeatNumberFromLine = (line) => {
  const regexMatch = /^([FB]{7})([LR]{3}$)/.exec(line);

  if (!regexMatch) return 0;

  const row = rowFromStr(regexMatch[1]);
  const column = columnFromStr(regexMatch[2]);

  return row * 8 + column;
};

const rowFromStr = (str) => {
  const binaryStr = [...str].map(binaryRowChar).join("");
  return parseInt(binaryStr, 2);
};

const binaryRowChar = (char) => {
  if (char === "B") {
    return "1";
  } else if (char === "F") {
    return "0";
  } else {
    console.log("INVALID CHARACTER IN ROW STRING");
  }
};

const columnFromStr = (str) => {
  const binaryStr = [...str].map(binaryColumnChar).join("");
  return parseInt(binaryStr, 2);
};

const binaryColumnChar = (char) => {
  if (char === "R") {
    return "1";
  } else if (char === "L") {
    return "0";
  } else {
    console.log("INVALID CHARACTER IN COLUMN STRING");
  }
};

const getHighestSeatNumber = () => {
  const seatNumbers = getLinesFromFile().map(getSeatNumberFromLine);
  return Math.max(...seatNumbers);
};

console.log(`The answer is ${getHighestSeatNumber()}`);

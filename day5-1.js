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
  return numberFromStr(str, "F", "B");
};

const columnFromStr = (str) => {
  return numberFromStr(str, "L", "R");
};

const numberFromStr = (str, char0, char1) => {
  const binaryStr = [...str]
    .map((char) => charToBinaryStr(char, char0, char1))
    .join("");
  return parseInt(binaryStr, 2);
};

const charToBinaryStr = (char, char0, char1) => {
  if (char === char1) {
    return "1";
  } else if (char0) {
    return "0";
  } else {
    console.log("INVALID CHARACTER IN ROW STRING");
  }
};

const getHighestSeatNumber = () => {
  const seatNumbers = getLinesFromFile().map(getSeatNumberFromLine);
  return Math.max(...seatNumbers);
};

console.log(`The answer is ${getHighestSeatNumber()}`);

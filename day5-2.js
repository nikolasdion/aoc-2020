const getLinesFromFile = () => {
  return require("fs")
    .readFileSync("./day5-input.txt", "utf8")
    .split("\n")
    .filter((line) => line.trim());
};

const getSeatNumberFromLine = (line) => {
  const regexMatch = /^([FB]{7})([LR]{3}$)/.exec(line);

  if (!regexMatch) return null;

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
  if (char === char0) {
    return "0";
  } else if (char1) {
    return "1";
  } else {
    console.log("INVALID CHARACTER IN STRING");
  }
};

const getYourSeatNumber = () => {
  const occupiedSeats = getLinesFromFile().map(getSeatNumberFromLine);
  const possibleSeats = getPossibleSeats(
    Math.min(...occupiedSeats),
    Math.max(...occupiedSeats)
  );

  const unoccupiedSeats = possibleSeats.filter(
    (seat) => !occupiedSeats.includes(seat)
  );

  if (unoccupiedSeats.length !== 1) {
    console.log(`MORE THAN ONE UNOCCUPIED SEATS FOUND ${unoccupiedSeats}`);
  }

  return unoccupiedSeats[0];
};

const getPossibleSeats = (min, max) => {
  const possibleSeats = [];
  for (let i = min; i <= max; i++) {
    possibleSeats.push(i);
    i++;
  }
  return possibleSeats;
};

console.log(`The answer is ${getYourSeatNumber()}`);

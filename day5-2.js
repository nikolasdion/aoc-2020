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

const getYourSeatNumber = () => {
  const occupiedSeats = getLinesFromFile().map(getSeatNumberFromLine);
  let possibleSeats = getPossibleSeats(
    Math.min(...occupiedSeats),
    Math.max(...occupiedSeats)
  );

  occupiedSeats.forEach((occupiedSeat) => {
    possibleSeats = possibleSeats.filter(
      (possibleSeat) => possibleSeat !== occupiedSeat
    );
  });

  if (possibleSeats.length !== 1) {
    console.log(`MORE THAN ONE POSSIBLE SEATS FOUND ${possibleSeats}`);
  }

  return possibleSeats[0];
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

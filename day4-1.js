const getLinesFromFile = () => {
  return require("fs").readFileSync("./day4-input.txt", "utf8").split("\n\n");
};

const getObjectFromLine = (line) => {
  const keyValueStrings = line.split(/\s/);
  const object = {};

  keyValueStrings.forEach((keyValueString) => {
    const regexMatch = keyValueString.match(/([a-z]*):(.*)/);
    if (!regexMatch) return;
    object[regexMatch[1]] = regexMatch[2];
  });

  return object;
};

const getObjectsFromFile = () => {
  return getLinesFromFile().map(getObjectFromLine);
};

const isPassport = (object) => {
  return (
    object.byr && // Birth Year
    object.iyr && // Issue Year
    object.eyr && // Expiration Year
    object.hgt && // Height
    object.hcl && // Hair Color
    object.ecl && // Eye Color
    object.pid // Passport ID
  );
};

const countPassports = () => {
  return getObjectsFromFile().filter(isPassport).length;
};

console.log(`The answer is ${countPassports()}`);

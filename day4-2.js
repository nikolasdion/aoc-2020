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
    isBirthYear(object.byr) &&
    isIssueYear(object.iyr) &&
    isExpirationYear(object.eyr) &&
    isHeight(object.hgt) &&
    isHairColor(object.hcl) &&
    isEyeColor(object.ecl) &&
    isPassportId(object.pid)
  );
};

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
const isBirthYear = (str) => {
  isYear(str, 1920, 2002);
};

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
const isIssueYear = (str) => {
  return isYear(str, 2010, 2020);
};

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
const isExpirationYear = (str) => {
  return isYear(str, 2020, 2030);
};

const isYear = (str, min, max) => {
  const isValidFormat = /^[0-9]{4}$/.test(str);
  const year = Number(str);
  return isValidFormat && year >= min && year <= max;
};

// hgt (Height) - a number followed by either cm or in:
//     If cm, the number must be at least 150 and at most 193.
//     If in, the number must be at least 59 and at most 76.
const isHeight = (str) => {
  const regexMatch = /^([0-9]*)([a-z]*)$/.exec(str);
  if (!regexMatch) return false;

  const value = Number(regexMatch[1]);
  const unit = regexMatch[2];

  switch (unit) {
    case "cm":
      return value >= 150 && value <= 193;
    case "in":
      return value >= 59 && value <= 76;
    default:
      return false;
  }
};

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
const isHairColor = (str) => {
  return /^#([0-9a-f]{6})$/.test(str);
};

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
const isEyeColor = (str) => {
  switch (str) {
    case "amb":
    case "blu":
    case "brn":
    case "gry":
    case "grn":
    case "hzl":
    case "oth":
      return true;
    default:
      return false;
  }
};

// pid (Passport ID) - a nine-digit number, including leading zeroes.
const isPassportId = (str) => {
  return /^([0-9]{9})$/.test(str);
};

const countPassports = () => {
  return getObjectsFromFile().filter(isPassport).length;
};

console.log(`The answer is ${countPassports()}`);

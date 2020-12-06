const getLinesFromFile = () => {
  return require("fs").readFileSync("./day2-input.txt", "utf8").split("\n");
};

const isLineValid = (str) => {
  const regexMatch = str.match(/([0-9]*)-([0-9]*) ([a-z]): (.*)/);

  // Somehow doesn't match the regex, so mark as invalid
  if (!regexMatch) return false;

  return isValid(
    Number(regexMatch[1]),
    Number(regexMatch[2]),
    regexMatch[3],
    regexMatch[4]
  );
};

const isValid = (min, max, requiredChar, password) => {
  const isRequiredChar = (char) => requiredChar === char;
  const charCount = [...password].filter(isRequiredChar).length;

  return charCount >= min && charCount <= max;
};

const countValidPasswords = () => {
  return getLinesFromFile().filter(isLineValid).length;
};

console.log(`The answer is ${countValidPasswords()}`);

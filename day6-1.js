const getGroupStringsFromFile = () => {
  return require("fs")
    .readFileSync("./day6-input.txt", "utf8")
    .split("\n\n")
    .filter((line) => line.trim());
};

const groupFromString = (groupString) => {
  return groupString.split("\n").filter((line) => line.trim());
};

const getGroupsFromFile = () => {
  return getGroupStringsFromFile().map(groupFromString);
};

const countAnswersInGroup = (group) => {
  const groupAnswers = new Set();

  group.forEach((person) => {
    [...person].forEach((answer) => {
      groupAnswers.add(answer);
    });
  });

  return groupAnswers.size;
};

const countAnswersInAllGroups = () => {
  let count = 0;
  getGroupsFromFile().forEach((group) => (count += countAnswersInGroup(group)));
  return count;
};

console.log(`The answer is ${countAnswersInAllGroups()}`);

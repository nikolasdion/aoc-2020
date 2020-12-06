const { group, count } = require("console");

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
  const groups = getGroupsFromFile();
  let count = 0;

  for (let group of groups) {
    count += countAnswersInGroup(group);
  }

  return count;
};

console.log(countAnswersInAllGroups());

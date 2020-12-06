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
  const groupAnswers = {};
  let count = 0;

  group.forEach((person) => {
    [...person].forEach((answer) => {
      if (!groupAnswers[answer]) {
        groupAnswers[answer] = 1;
      } else {
        groupAnswers[answer]++;
      }
    });
  });

  // count questions that everyone answers yes to
  for (answer in groupAnswers) {
    if (groupAnswers[answer] === group.length) {
      count++;
    }
  }

  return count;
};

const countAnswersInAllGroups = () => {
  let count = 0;

  getGroupsFromFile().forEach((group) => (count += countAnswersInGroup(group)));

  return count;
};

console.log(countAnswersInAllGroups());

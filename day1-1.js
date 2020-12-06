const getNumbersFromFile = () => {
  return require("fs")
    .readFileSync("./day1-input.txt", "utf8")
    .split("\n")
    .map((str) => Number(str));
};

const findAnswer = (numbers) => {
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum === 2020) {
        return numbers[i] * numbers[j];
        break;
      }
    }
  }
};

console.log(`The answer is: ${findAnswer(getNumbersFromFile())}`);

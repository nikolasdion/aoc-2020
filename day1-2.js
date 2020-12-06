const getNumbersFromFile = () => {
  return require("fs")
    .readFileSync("./day1-input.txt", "utf8")
    .split("\n")
    .map((str) => Number(str));
};

const findAnswer = (numbers) => {
  for (let i = 0; i < numbers.length - 3; i++) {
    for (let j = i + 1; j < numbers.length - 2; j++) {
      for (let k = j + 1; k < numbers.length - 1; k++) {
        const sum = numbers[i] + numbers[j] + numbers[k];
        if (sum === 2020) {
          console.log(`Numbers are: ${numbers[i]} ${numbers[j]} ${numbers[k]}`);
          return numbers[i] * numbers[j] * numbers[k];
          break;
        }
      }
    }
  }
};

console.log(`The answer is: ${findAnswer(getNumbersFromFile())}`);

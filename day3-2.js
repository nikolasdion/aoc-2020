const getLinesFromFile = () => {
  return require("fs").readFileSync("./day3-input.txt", "utf8").split("\n");
};

const getTreeMatrix = () => {
  return getLinesFromFile().map(lineToTreeArray);
};

const lineToTreeArray = (line) => {
  const isTree = (char) => char === "#";
  return [...line].map(isTree);
};

const getNextColumn = (currentColumn, interval, treeMatrix) => {
  let nextColumn = currentColumn + interval;

  if (nextColumn >= treeMatrix[0].length) {
    nextColumn = nextColumn - treeMatrix[0].length;
  }

  return nextColumn;
};

const countTrees = (treeMatrix, rowInterval, columnInterval) => {
  let currentRow = 0;
  let currentColumn = 0;
  let treeCount = 0;

  while (currentRow < treeMatrix.length) {
    if (treeMatrix[currentRow][currentColumn]) treeCount++;
    currentRow += rowInterval;
    currentColumn = getNextColumn(currentColumn, columnInterval, treeMatrix);
  }

  return treeCount;
};

const calculateAnswer = () => {
  const treeMatrix = getTreeMatrix();
  const count11 = countTrees(treeMatrix, 1, 1);
  const count13 = countTrees(treeMatrix, 1, 3);
  const count15 = countTrees(treeMatrix, 1, 5);
  const count17 = countTrees(treeMatrix, 1, 7);
  const count21 = countTrees(treeMatrix, 2, 1);
  return count11 * count13 * count15 * count17 * count21;
};

console.log(`The answer is ${calculateAnswer()}`);

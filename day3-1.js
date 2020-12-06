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

const getNextColumn = (currentColumn, treeMatrix) => {
  let nextColumn = currentColumn + 3;

  if (nextColumn >= treeMatrix[0].length) {
    nextColumn = nextColumn - treeMatrix[0].length;
  }

  return nextColumn;
};

const countTrees = (treeMatrix) => {
  let currentColumn = 0;
  let treeCount = 0;

  for (row of treeMatrix) {
    console.log(row[currentColumn]);
    if (row[currentColumn]) {
      treeCount++;
    }
    currentColumn = getNextColumn(currentColumn, treeMatrix);
  }

  return treeCount;
};

console.log(`The answer is ${countTrees(getTreeMatrix())}`);

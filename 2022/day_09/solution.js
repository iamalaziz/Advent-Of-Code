const { readFileSync } = require("fs");

function syncReadFile() {
  const filename =
    "/Users/abdulaziz/Coding/advent-of-code/years/2022/day_09/input.txt";
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);
  return arr;
}

const rawMoves = syncReadFile();

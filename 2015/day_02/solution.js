const { readFileSync } = require("fs");

function syncReadFile() {
  const filename =
    "/Users/abdulaziz/Coding/advent-of-code/years/2015/day_02/input.txt";
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);
  return arr;
}
// const input = syncReadFile()
const input = "10x3x4";


const dimensions = [...input.split("x")].map((i) => {
  return Number(i);
});
console.log(dimensions);
const findDimensions = () => {
  console.log("findDimensions");
};


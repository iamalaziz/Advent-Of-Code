/* Getting input data from local txt file */
const { readFileSync } = require("fs");

function syncReadFile() {
  const filename =
    "/Users/abdulaziz/Coding/advent-of-code/years/2022/day_01/input.txt";
  const contents = readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/);
  return arr;
}

const input = syncReadFile();
// const input = ["100", "200", "300", "", "400", "500", "", "200", "100", "100"];

function getHighestCalories() {
  let sum = 0;
  let the_highest_calories = 0;

  input.forEach((i) => {
    if (i !== "") {
      sum += Number(i);
    } else {
      sum > the_highest_calories && (the_highest_calories = sum);
      sum = 0;
    }
  });
  console.log(the_highest_calories);
}

getHighestCalories();

module.exports = { input };

const { input } = require("./input");

let floor = 0;
const dir = input;
/*

// PART I ---------------------------

[...dir].forEach((i) => {
  i === "(" ? (floor += 1) : (floor -= 1);
});

console.log(dir);
console.log(floor);
*/

// PART I ---------------------------

for (let i = 0; i < dir.length; i++) {
  dir[i] === "(" ? (floor += 1) : (floor -= 1);
  if (floor == -1) {
    console.log(`Floor -1 in ${i + 1} index`);
    return;
  }
}

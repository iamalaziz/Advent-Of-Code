const {input} = require("./input");

function Part1() {
  let count = 4;
  let marker = input.slice(0, 4);
  if(isDifferent(marker)) {
    count = 4;
    return;
  }
  for (let i = 4; i < input.length; i++) {
    count += 1;
    marker += input[i];
    let result = isDifferent(marker.slice(marker.length - 4, marker.length))
    if(result){
      break;
    }
  }
  console.log(count);
}

Part1()

function Part2() {
  let count = 14;
  let marker = input.slice(0, 14);
  if(isDifferent(marker)) {
    count = 14;
    return;
  }
  for (let i = 14; i < input.length; i++) {
    count += 1;
    marker += input[i];
    let result = isDifferent(marker.slice(marker.length - 14, marker.length))
    if(result){
      break;
    }
  }
  console.log(count);
}

// Part2() //Before running the code for the second question, comment out the call for the first part above because two solutions use the same input.

function isDifferent(string) {
  const uniqueChars = new Set([...string]);
  const stringedUniqueChars = [...uniqueChars].join("");
  return string === stringedUniqueChars;
}
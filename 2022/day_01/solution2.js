const { input } = require("./solution");

const sumOfThreeHighest = () => {
  let arr = [];
  let sum = 0;

  input.forEach((i) => {
    if (i !== "") {
      sum += Number(i);
    } else {
      arr.push(sum);
      sum = 0;
    }
  });
  let sortedArray = arr.sort((a, b) => {
    return b - a;
  });

  const result = sortedArray[0] + sortedArray[1] + sortedArray[2];
  console.log(result);
};
sumOfThreeHighest();

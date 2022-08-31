"Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.";
"node RightShiftbyDivision.js";

function shiftToRight(x, y) {
  let z = 2 ** y;
  console.log(z);
  let output = Math.floor(x / 2 ** y);
  return output;
}

console.log(shiftToRight(80, 3));

"Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise.";

function plusSign(str) {
  let output = true;

  str = str.split("");
  let strLength = str.length;

  if (str[0] !== "+") output = false;
  if (str[strLength - 1] !== "+") output = false;

  for (let i = 1; i < strLength; i++) {
    if (i % 2 !== 0) continue;
    if (str[i] !== "+") output = false;
  }

  return output;
}

console.log(plusSign("+d+i+#+c+"));

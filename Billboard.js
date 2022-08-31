"https://edabit.com/challenge/QPqN3tp7RqsxKRnq2";
"node Billboard.js";

function canPut(str, dim) {
  if (str.length <= dim[1]) return true;

  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > dim[1]) return false;
    if (str.length > dim[0]) return false;
  }
  return true;
}

"https://edabit.com/challenge/WboAruyx4HQ3Q553q";
"node SecretAgentPassword.js";

function secretPassword(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyza".split("");

  message = message.split("");

  if (message.length !== 9) return "BANG! BANG! BANG!";
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i])) continue;
    return "BANG! BANG! BANG!";
  }

  let partOne = [
    alphabet.indexOf(message[0]) + 1,
    message[1],
    alphabet.indexOf(message[2]) + 1,
  ];
  let partTwo = [message[3], message[4], message[5]].reverse();

  let partThree = [message[6], message[7], message[8]];

  partThree[0] = alphabet[alphabet.indexOf(partThree[0]) + 1];
  partThree[1] = alphabet[alphabet.indexOf(partThree[1]) + 1];
  partThree[2] = alphabet[alphabet.indexOf(partThree[2]) + 1];

  return [...partTwo, ...partThree, ...partOne].join("");
}
console.log(secretPassword("mubashirh"));

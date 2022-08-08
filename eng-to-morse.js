const { morseLookup } = require("./morseLookup");

const engToMorse = (inputStr) => {
  console.log(morseLookup);
  const splitStr = inputStr.toUpperCase().split("");

  let outputStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    const letter = splitStr[i];
    outputStr += morseLookup[letter];
  }
  console.log(outputStr);
};

engToMorse("Hello World");

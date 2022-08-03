const engToMorse = (inputStr) => {
  const morseLookup = {
    A: ".- ",
    B: "-... ",
    C: "-.-. ",
    D: "-.. ",
    E: ". ",
    F: "..-. ",
    G: "--. ",
    H: ".... ",
    I: ".. ",
    J: ".--- ",
    K: "-.- ",
    L: ".-.. ",
    M: "-- ",
    N: "-. ",
    O: "--- ",
    P: ".--. ",
    Q: "--.- ",
    R: ".-. ",
    S: "... ",
    T: "- ",
    U: "..- ",
    V: "...- ",
    W: ".-- ",
    X: "-..- ",
    Y: "-.-- ",
    Z: "--.. ",
    " ": "/ ",
  };

  const splitStr = inputStr.toUpperCase().split("");

  let outputStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    const letter = splitStr[i];
    outputStr += morseLookup[letter];
  }
  console.log(outputStr);
};

engToMorse("Hello World");

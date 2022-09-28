const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

function randomFunc() {
  let lower = getRandomLower();
  let upper = getRandomUpper();
  let number = getRandomNumber();
  let symbol = getRandomSymbol();

  return { lower, upper, number, symbol };
}

clipboardEl.addEventListener("click", () => {
  const cb = navigator.clipboard;
  cb.writeText(resultEl.innerText).then((resultEl.innerText = "Copied!"));
});

generateEl.addEventListener("click", () => {
  generatePassword(
    lowercaseEl.checked,
    uppercaseEl.checked,
    numbersEl.checked,
    symbolsEl.checked,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let password = "";
  //   lower = true;
  //   upper = true;
  //   number = false;
  //   symbol = false;

  for (let i = 0; i < length; i++) {
    let rand = randomFunc();

    let randArr = [];
    if (lower == true) randArr.push(rand.lower);
    if (upper == true) randArr.push(rand.upper);
    if (number == true) randArr.push(rand.number);
    if (symbol == true) randArr.push(rand.symbol);
    // console.log(randArr);
    password = password + randArr[Math.floor(Math.random() * randArr.length)];
  }
  console.log(password);
  resultEl.innerText = password;
}

function getRandomLower() {
  const lowerArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const random = Math.floor(Math.random() * lowerArr.length);
  //   console.log(upperArr[random]);
  return lowerArr[random];
}

function getRandomUpper() {
  const upperArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const random = Math.floor(Math.random() * upperArr.length);
  //   console.log(upperArr[random]);
  return upperArr[random];
}

function getRandomNumber() {
  const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const random = Math.floor(Math.random() * numArr.length);
  //   console.log(upperArr[random]);
  return numArr[random];
}

function getRandomSymbol() {
  const symbolArr = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
  ];
  const random = Math.floor(Math.random() * symbolArr.length);
  //   console.log(upperArr[random]);
  return symbolArr[random];
}

// getRandomUpper();
// generatePassword(0, 0, 0, 0, 6);

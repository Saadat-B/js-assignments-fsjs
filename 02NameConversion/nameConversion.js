const text = document.querySelector("#text");
const convertBtn = document.querySelector("#convert-btn");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

function convertToCamelCase(text) {
  const words = text.toLowerCase().split(" ");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  //   console.log(words.join(""));
  camelCase.innerText = words.join("");
}
function convertToPascalCase(text) {
  const words = text.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  //   console.log(words.join(""));
  pascalCase.innerText = words.join("");
}
function convertToSnakeCase(text) {
  const words = text.toLowerCase().split(" ");
  //   console.log(words.join("_"));
  snakeCase.innerText = words.join("_");
}
function convertToScreamingSnakeCase(text) {
  const words = text.toUpperCase().split(" ");
  //   console.log(words.join("_"));
  screamingSnakeCase.innerText = words.join("_");
}
function convertToKebabCase(text) {
  const words = text.toLowerCase().split(" ");
  //   console.log(words.join("-"));
  kebabCase.innerText = words.join("-");
}
function convertToScreamingKebabCase(text) {
  const words = text.toUpperCase().split(" ");
  //   console.log(words.join("-"));
  screamingKebabCase.innerText = words.join("-");
}

convertBtn.addEventListener("click", () => {
  convertToCamelCase(text.value);
  convertToPascalCase(text.value);
  convertToSnakeCase(text.value);
  convertToScreamingSnakeCase(text.value);
  convertToKebabCase(text.value);
  convertToScreamingKebabCase(text.value);
});

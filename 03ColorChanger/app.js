const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function changeColor() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    result = result + colors[random];
  }
  console.log(result);
  canvas.style.backgroundColor = result;
}

btn.addEventListener("click", changeColor);

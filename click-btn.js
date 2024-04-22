const btnAdd = document.querySelector("button[data-add]");
const inputValue = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span");
const btnReset = document.querySelector("button[data-reset]");
let total = 0;
console.log(outputEl);
btnAdd.addEventListener("click", function () {
  const value = Number(inputValue.value);
  console.log(value);
  total += value;
  console.log(total);
  outputEl.textContent = total;
  inputValue.value = "";
});

btnReset.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = "";
});

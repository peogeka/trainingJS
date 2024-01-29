// let number = "50px";

// number = Number.parseInt(number);
// // console.log("number:", number);
// // console.log(typeof number);

// let number1 = "50.25px";
// // console.log(number1);
// number1 = Number.parseFloat(number1);
// // console.log("number:", number1);
// // console.log(typeof number1);

// let salary = 1234.5463;
// salary = Number(salary.toFixed(1));

// // console.log(salary);
// // console.log(typeof salary);
// const base = "9";
// const power = "2";

// const result = Number(Math.sqrt(base, power)); /*квадратний корінь*/
// console.log(result);

// const result2 = base ** power;
// console.log(result2);

// let base = prompt("Число");
// base = Number(base);

// let power = prompt("Степінь");
// power = Number(power);
// const result = base ** power;
// console.log(result);

// const max = 150;
// const min = 100;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

const colorPicker = ["tomato", "blue", "sky", "red"];
const max = colorPicker.length - 1;
const min = 0;
const result = Math.round(Math.random() * (max - min) + min);
const color = colorPicker[result];
console.log(color);
document.body.style.backgroundColor = color;

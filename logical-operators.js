// console.log(0 && 10 && "hello"); /* && приводить все до Bolean повертає те що FALSE*/
// console.log(0||10||5||0)/* приводить все до Bolean повертає те що TRUE */

// const x1 = 10;
// const x2 = 50;
// const number = 30;
// console.log(x1 > number || x2 > number);
// console.log(x1 > number && x2 > number);
// console.log(`Чи більше число ${x1} від числа ${number}?`, x1 > number);

// const balance = 0;
// let message;
// if (balance > 0) {
//   message = "баланс > 0";
// } else if (balance === 0) {
//   message = "баланс = 0";
// } else {
//   message = "баланс < 0";
// }
// console.log(message);

const balance = -1;
const message = balance >= 0 ? "баланс >= 0" : "баланс < 0";
console.log(message);

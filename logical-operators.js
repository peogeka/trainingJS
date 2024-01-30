// console.log(0 && 10 && "hello"); /* && приводить все до Bolean повертає те що FALSE*/
// console.log(0||10||5||0)/* приводить все до Bolean повертає те що TRUE */

const x1 = 10;
const x2 = 50;
const number = 30;
console.log(x1 > number || x2 > number);
console.log(x1 > number && x2 > number);
console.log(`Чи більше число ${x1} від числа ${number}?` , x1 > number);


// Написати скрипт, який рахує суму двух масивів
const array = [12, 32, 45, 65];
const array1 = [23, 87, 54];
const array2 = [30,22];
let total = 0;

const numbers = array.concat(array1,array2);
for (const number of numbers) {
  total += number;
}

console.log(total);

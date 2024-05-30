// Написати скрипт для підранку суми всіх парних значень
const numbers = [12, 442, 543, 23, 43, 543, 99, 44, 56];
let total1 = 0;
let total2 = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log("парне", number);
    total1 += number;
  } else if (number % 2 !== 0) {
    console.log("не парне", number);
    total2 += number;
  }
}
console.log("total:", total1);
console.log("total(не парне):", total2);

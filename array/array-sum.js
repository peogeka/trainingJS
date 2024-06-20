// Написати функцію calculateTotalPrice
const calculateTotalPrice = function (numbers) {
  console.log(numbers);
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

console.log(calculateTotalPrice([10, 323, 432]));
console.log(calculateTotalPrice([12, 78, 99]));

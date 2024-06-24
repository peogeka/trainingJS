// Написати скрипт для пошуку самого малого числа в масиві про умові що числа не повторюються
// const numbers = [12, 4, 5, 67, 88, 23, 3];

// if (numbers.length === 0) {
//   console.log("Масив порожній");
// } else {
//   const smallestNumber = Math.min(...numbers);
//   console.log(smallestNumber);
// }

const findSmallestNumber = function (numbers) {
  if (numbers.length === 0) {
    console.log("Масив порожній");
    return;
  } else {
    const smallestNumber = Math.min(...numbers);
    return smallestNumber;
  }
  
};
console.log(findSmallestNumber([23, 13, 43]));
console.log(findSmallestNumber([1, -1, 32,99]));
console.log(findSmallestNumber([]));
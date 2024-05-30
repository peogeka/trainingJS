// Написати скрипт для пошуку самого малого числа в масиві про умові що числа не повторюються
const numbers = [12, 4, 5, 67, 88, 23, 3];

if (numbers.length === 0) {
  console.log("Масив порожній");
} else {
  const smallestNumber = Math.min(...numbers);
  console.log(smallestNumber);
}
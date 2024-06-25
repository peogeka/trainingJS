// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (let index = 0; index < words.length; index += 1) {
//     const element = words[index];

//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let index = min; index <= max; index += 1) {
//     numbers.push(index);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 34));

function filterArray(numbers, value) {
  const newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([1, 2, 3, 4, 5], 5));

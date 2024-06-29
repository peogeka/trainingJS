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

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getEvenNumbers(start, end) {
//   let newArray = [];
//   for (let index = start; index <= end; index += 1) {
//     if (index % 2 === 0) {
//       newArray.push(index);
//     }
//   }
//   return newArray;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11))
function includes(array, value) {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);

// Написати скрип який змінює регістр кожного символа в строці на попередні
// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// // for (const letter of letters) {
// //   if (letter === letter.toLowerCase()) {
// //     invertedString += letter.toUpperCase();
// //   } else {
// //     invertedString += letter.toLowerCase();
// //   }
// // }

// for (const letter of letters) {
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString);

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};
console.log(changeCase("rEaCt"));
console.log(changeCase("jAvAsCriPT"));
console.log(changeCase("TyPeScriPT"));

// Написати скрип який змінює регістр кожного символа в строці на попередні
const string = "JavaScript";
const letters = string.split("");
let invertedString = "";
// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }

for (const letter of letters) {
  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);

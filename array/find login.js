// Написати скрипт для пошуку логіну
// *якщо логіну немає вивести повідомлення "Логін не знайдено"
// * якщо логін знайдено "Логін знайдено"

const logins = ["SkyWalker01", "MysticEchoes", "NebulaKnight", "QuantumDrift"];
const loginToFind = "QuantumDrift";
// let message = `Логін ${loginToFind} не знайдено `;

// for (const login of logins) {
//   console.log(login);
//   if (login === loginToFind) {
//     message = `Логін ${loginToFind} знайдено`;
//     break;
//   }

// }
// console.log(message);

const message = logins.includes(loginToFind)
  ? `Логін ${loginToFind} знайдено`
  : `Логін ${loginToFind} не знайдено `;
console.log(message);

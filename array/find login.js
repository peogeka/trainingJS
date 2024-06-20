// Написати скрипт для пошуку логіну
// *якщо логіну немає вивести повідомлення "Логін не знайдено"
// * якщо логін знайдено "Логін знайдено"

const logins = ["SkyWalker01", "MysticEchoes", "NebulaKnight", "QuantumDrift"];
// const loginToFind = "QuantumDrift";

// const message = logins.includes(loginToFind)
//   ? `Логін ${loginToFind} знайдено`
//   : `Логін ${loginToFind} не знайдено `;
// console.log(message);

// Переробити на функцію

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Логін ${loginToFind} знайдено`
    : `Логін ${loginToFind} не знайдено `;
};

console.log(findLogin(logins, "SkyWalker01"));
console.log(findLogin(logins, "marshall"));
console.log(findLogin(logins, "QuantumDrift"));

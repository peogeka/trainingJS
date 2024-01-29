const brand = "SaMsung";
const normalizedBrand = brand[0] + brand.slice(1).toLowerCase();
// console.log(normalizedBrand);
const blackList = "розпродаж";
const string1 = "Привіт це РозпроДаж";

const includesBlackList = string1.toLowerCase().includes(blackList);
console.log(includesBlackList);

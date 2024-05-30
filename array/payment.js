const card = [10, 24, 88, 130, 450, 33];
// сума всіх чисел 
// let total = 0;
// for (const value of card) {
//   total += value;
// }
// console.log("Total:", total);

// збільшити кожне значення на 10 %
for (let i = 0; i < card.length; i += 1) {
  card[i] = Math.round(card[i] * 1.1);
}
console.log(card);

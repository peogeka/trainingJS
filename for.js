// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

/*Задача: Написати скрипт, який буде рахувати загальну кількусть зарплати*/
const minSalary = 500;
const maxSalary = 5000;
const employees = 10;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`ЗП працівника номер ${i} = ${salary} `);
  totalSalary += salary;
}

console.log(`totalSalary = ${totalSalary}`);

/*Задача: Написати скрипт, який підрахує суму всіх парних чисел в заданому відрізку */

const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log(`не парне ${i}`);
    continue;
  }
  console.log(`парне ${i}`);
  total += i;
}
console.log(`сума всіх парних = ${total}`);

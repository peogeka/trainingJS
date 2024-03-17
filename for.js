// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

/*Задача: Написати скрипт, який буде рахувати загальну кількусть зарплати*/
const minSalary = 500;
const maxSalary = 5000;
const employees = 2;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`ЗП працівника номер ${i} = ${salary} `);
  totalSalary += salary;
}

console.log(`totalSalary = ${totalSalary}`);

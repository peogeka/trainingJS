let number = "50px";

number = Number.parseInt(number);
console.log("number:", number);
console.log(typeof number);

let number1 = "50.25px";
console.log(number1);
number1 = Number.parseFloat(number1);
console.log("number:", number1);
console.log(typeof number1);

let salary = 1234.5463;
salary = salary.toFixed(1);
salary = Number(salary);
console.log(salary);
console.log(typeof salary);

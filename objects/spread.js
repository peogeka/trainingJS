// const temps = [13, 82, 40, 3, 15, 8];
// console.log(Math.min(...temps));
// console.log(Math.max(...temps));

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const array3 = [9, 10, 11, 12];

// const arrayAll = [...array1, ...array2, ...array3];
// console.log(arrayAll);

const a = { x: 1, b: 2 };
const b = { x: 0, d: 4 };

// const c = Object.assign({}, a, b);
const c = {
  name: "Mango",
  ...a,
  ...b,
};
console.log(c);

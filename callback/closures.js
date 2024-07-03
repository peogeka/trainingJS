// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");

// mango("pelmeni");

// const poly = makeSheff("Poly");

// poly("pumpkin buns");

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder1 = rounder(2);

console.log(rounder1(5.67895));

const rounder2 = rounder(0);

console.log(rounder2(5.67895));

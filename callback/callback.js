// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };
// doMath(5, 8, add);

// doMath(888, 356, sub);

// const buttonRef = document.querySelector(".js-btn");

// const handleBtnClick = function () {
//   console.log("Кнопка натиснута");
// };

// buttonRef.addEventListener("click", handleBtnClick);

// const onRequestSuccess = function (response) {
//   //   console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);

// const filter = function (array, test) {};
// const fruits = [
//   {
//     name: "Apple",
//     quantity: 10,
//     isFresh: true,
//   },
//   {
//     name: "Banana",
//     quantity: 5,
//     isFresh: true,
//   },
//   {
//     name: "Orange",
//     quantity: 8,
//     isFresh: false,
//   },
// ];

const filter = function (array, test) {
  const filteredNumber = [];
  for (const el of array) {
    if (test(el)) {
      console.log(test(el));
      filteredNumber.push(el);
    }
  }
  return filteredNumber;
};

const callback1 = function (number) {
  return number >= 3;
};
const callback2 = function (number) {
  return number < 2;
};

console.log(filter([1, 2, 3, 4, 5, 6], callback1));
console.log(filter([1, 2, 3, 4, 5, 6, 7], callback2));

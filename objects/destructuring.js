const object = {
  name: "John",
  age: 30,
  city: ["New York"],
  profession: "Engineer",
  hobby: { a: "Photography", b: "Developer" },
};

// const {
//   name,
//   age,
//   city,
//   profession,
//   hobby,
//   hobby: { a, b },
// } = object;

// console.log(hobby);

// const authors = {
//   kiwi: 7,
//   poly: 8,
//   ajax: 9,
// };

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {

//   console.log(name, rating);
// }

const { name, age, city, ...props } = object;
console.log(props);

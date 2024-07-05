// const numbers = [5, 10, 15, 20, 25];

// const doubleNumbers = numbers.map((number) => number * 2);
//  console.log(doubleNumbers);

const peoples = [
  {
    name: "John",
    age: 30,
    profession: "Engineer",
    city: "New York",
    isMarried: true,
  },
  {
    name: "Alice",
    age: 25,
    profession: "Designer",
    city: "San Francisco",
    isMarried: false,
  },
  {
    name: "Bob",
    age: 40,
    profession: "Manager",
    city: "Chicago",
    isMarried: true,
  },
  {
    name: "Emily",
    age: 35,
    profession: "Teacher",
    city: "Los Angeles",
    isMarried: false,
  },
  {
    name: "Michael",
    age: 28,
    profession: "Developer",
    city: "Seattle",
    isMarried: true,
  },
];
console.log("peoples:", peoples);

const peopleName = peoples.map((people) => people.name);

// console.log("peopleName:", peopleName);

const peopleAge = peoples.map((people) => ({ ...people, age: people.age + 1 }));
console.log("peopleAge:", peopleAge);

// змінити в  "Emily" професію
const whoToChange = "Emily";

const changeProfession = peoples.map((player) => {
  if (player.name === whoToChange) {
    return { ...player, profession: "Doctor" };
  }
  return player;
});


console.log("changeProfession:", changeProfession);

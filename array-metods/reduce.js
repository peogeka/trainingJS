const numbers = [5, 10, 15, 20, 25, 30];

const total = numbers.reduce((acc, number) => (acc += number), 0);
console.log("total:", total);

const salary = {
  Іван: 50000,
  Олена: 60000,
  Петро: 55000,
};
const totalSalary = Object.values(salary).reduce(
  (acc, value) => (acc += value),
  0
);
console.log("totalSalary:", totalSalary);

const players = [
  {
    id: 1,
    name: "Олександр",
    timePlayed: 120,
    points: 3000,
    onLine: true,
  },
  {
    id: 2,
    name: "Андрій",
    timePlayed: 95,
    points: 2500,
    onLine: false,
  },
  {
    id: 3,
    name: "Марія",
    timePlayed: 140,
    points: 3200,
    onLine: true,
  },
  {
    id: 4,
    name: "Ірина",
    timePlayed: 80,
    points: 2100,
    onLine: false,
  },
  {
    id: 5,
    name: "Дмитро",
    timePlayed: 110,
    points: 2900,
    onLine: true,
  },
];

const totalTimePlayed = players.reduce(
  (total, { timePlayed }) => (total += timePlayed),
  0
);
console.log("totalTimePlayed:", totalTimePlayed);

const fruits = [
  { label: "Яблуко", price: 10.5, quantity: 50 },
  { label: "Банан", price: 15.0, quantity: 30 },
  { label: "Апельсин", price: 20.0, quantity: 20 },
  { label: "Ківі", price: 25.0, quantity: 10 },
  { label: "Груша", price: 12.5, quantity: 40 },
];

const totalPrice = fruits.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.log("totalPrice:", totalPrice);

const tweets = [
  {
    id: 1,
    likes: 25,
    tags: ["js", "html", "java"],
  },
  {
    id: 2,
    likes: 35,
    tags: ["python", "css", "java"],
  },
  {
    id: 3,
    likes: 55,
    tags: ["c++", "typescript", "java"],
  },
  {
    id: 4,
    likes: 65,
    tags: ["ruby", "swift", "java"],
  },
];


const allTags = tweets.reduce(
  (tags, tweet) => [...tags, ...tweet.tags],

  []
);
console.log("allTags:", allTags);

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log("tagsStats:", tagsStats);

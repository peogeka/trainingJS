const numbers = [5, 10, 15, 20, 25];
console.log("numbers:", numbers);
const numberToFind = numbers.find((number) => number > 10);
console.log("numberToFind (number > 10):", numberToFind);

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

const playerIdToFind = 4;

const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log("playerWithId:", playerWithId);

const playedNameToFind = "Андрій";
const playedWithName = players.find(({ name }) => name === playedNameToFind);
console.log("playedWithName:", playedWithName);

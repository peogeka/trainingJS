const numbers = [5, 10, 15, 20, 25];
const filterNumbers = numbers.filter((number) => number > 10);
console.log("filterNumbers number > 10:", filterNumbers);

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

// const onlinePlayers = players.filter(({ onLine }) => onLine);
// console.log("onlinePlayers:", onlinePlayers);
// const offLinePlayers = players.filter(({ onLine }) => !onLine);
// console.log("offLinePlayers:", offLinePlayers);

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 100);
// console.log("hardcorePlayers:", hardcorePlayers);

const topPlayer = players.reduce((max, player) => (player.points > max.points ? player : max), players[0]);
console.log("topPlayer:", topPlayer);


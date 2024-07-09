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

const isAllOnline = players.every(({ onLine }) => onLine);
console.log("isAllOnline:", isAllOnline);

const isAnyOnline = players.some(({ onLine }) => onLine);
console.log("isAnyOnline:", isAnyOnline);

const anyHardcoredPlayer = players.some(({ timePlayed }) => timePlayed > 120);
console.log("anyHardcoredPlayer (timePlayed > 120):", anyHardcoredPlayer);

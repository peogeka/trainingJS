const scores = [61, 19, 74, 35, 92, 56];
console.log("scores:", scores);

const descSortedNumbers = [...scores].sort((a, b) => b - a);
console.log("descSortedNumbers:", descSortedNumbers);
const ascSortedNumbers = [...scores].sort((a, b) => a - b);
console.log("ascSortedNumbers:", ascSortedNumbers);

const letters = ["b", "B", "a", "A", "c", "C"];
const sortLetters = letters.sort();
console.log("sortLetters:", sortLetters);

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
const sortedByBestPlayer = [...players].sort(
  (prevPlayers, nextPlayers) => nextPlayers.timePlayed - prevPlayers.timePlayed
);
console.log("sortedByBestPlayer:", sortedByBestPlayer);

const sortedByName = [...players].sort((firstPlayer, nextPlayer) =>
  nextPlayer.name.localeCompare(firstPlayer.name)
);
console.log("sortedByName:", sortedByName);

const result = players
  .filter(({ onLine }) => onLine)
  .sort((a, b) => b.points - a.points);
console.log("result:", result);

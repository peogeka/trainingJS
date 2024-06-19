const cards = [
  "карточка - 1",
  "карточка - 2",
  "карточка - 3",
  "карточка - 4",
  "карточка - 5",
];

// Видалення по індексу

const cardToRemove = "карточка - 4";
const index = cards.indexOf(cardToRemove);

// cards.splice(index, 1);

// Додавання по індексу (1. на початок 2. в кінець 3. в будь-яке місце, яке захочу )

const cardToInsert = "карточка - 6";
const index1 = 2;
// cards.unshift(cardToInsert); - на початок
// cards.push(cardToInsert); - в цінець
// cards.splice(index, 0, cardToInsert); -в будь-яке місце, яке захочу
// console.table(cards);
// Оновлення по індексу

// Оновлення (по індексу)

const cardToUpdate = "new card";
cards.splice(2, 1, cardToUpdate);
console.table(cards);

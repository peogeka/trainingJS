// Написати функцію LogItems для перебору і логування масиву
const LogItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};
LogItems(["Dmytro", "Liza", "Yevhenii", "Maksim"]);
LogItems([1, 2, 3, 4, 5]);
LogItems(["клавіатура", "часи", "навушники"]);

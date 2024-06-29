const friends = [
  { name: "John", online: true },
  { name: "Mary", online: false },
  { name: "Alex", online: true },
  { name: "Sophia", online: false },
  { name: "Michael", online: true },
];
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `${name} знайшло`;
//     }
//   }
//   return `${name} не знайшло`;
// };

// console.log(findFriendByName(friends, "Alex"));
// console.log(findFriendByName(friends, "Michael"));
// console.log(findFriendByName(friends, "Yevhenii"));

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const namesIsOnline = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       namesIsOnline.push(friend);
//     }
//   }
//   return namesIsOnline;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const namesIsOffline = [];
//   for (const friend of allFriends) {
//     if (!friend.online) {
//       namesIsOffline.push(friend);
//     }
//   }
//   return namesIsOffline;
// };

// console.log(getOfflineFriends(friends));

// const x = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
// };
// console.log(Object.keys(x).length);


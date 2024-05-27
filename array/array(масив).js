const friends = ["Dmytro", "Liza", "Yevhenii", "Maksim"];
// console.table(friends);
// console.log(friends.length);

const lastIndex = friends.length - 1;
// console.log(lastIndex)

// console.log(friends[friends.length - 1])
// friends[0] = "Sasha";

// console.table(friends);

// for (let index = 0; index <= lastIndex; index += 1) {
//   friends[index] += "-1";
//   console.log(friends[index]);
// }

for (const friend of friends) {
    console.log(friend)
    
}
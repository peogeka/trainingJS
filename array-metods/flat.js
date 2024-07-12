const array = [1, 2, 3, [4, [5]], [6, [7, 8, [9]]]].flat(3);
console.log("array:", array);

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

const tags = tweets.flatMap((tweet) => tweet.tags);
console.log("tags:", tags);

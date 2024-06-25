function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let index = 0; index < words.length; index += 1) {
    const element = words[index];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

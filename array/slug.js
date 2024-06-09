// Робимо Slug(це позначення частини URL, яка є зручним для читання і зрозумілим фрагментом тексту) в Url з назви статті
// Заголовок статті складаєьбся тільки з букв та пробілів
const title = "10 Tips for Effective Web Development";

// const normalizeTitle = title.toLowerCase();

// console.log(normalizeTitle);

// const words = normalizeTitle.split(" ")
// console.log(words)

// const slug = words.join("-");
// console.log(slug);

const slug = title.toLowerCase().split(" ").join("-");
console.log(slug);

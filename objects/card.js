const products = [
  { name: "🍎 Apple", price: 50 },
  { name: "🍌 Banana", price: 60 },
  { name: "🍇 Grapes", price: 70 },
  { name: "🍉 Watermelon", price: 90 },
];

const card = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {},
  clear() {
    return (this.items = []);
  },
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

card.add({ name: "🍎 Apple", price: 50 });
card.add({ name: "🍌 Banana", price: 60 });
card.add({ name: "🍇 Grapes", price: 70 });
card.add({ name: "🍉 Watermelon", price: 90 });
console.log(card.getItems());

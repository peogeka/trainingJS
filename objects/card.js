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
    for (const item of this.items) {
      if (product.name === item.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    const { items } = this;
    items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      if (productName === item.name) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          console.log(
            `Продукт для видалення з індексом ${i} і ціною ${item.price}`,
            productName
          );
          items.splice(i, 1);
        }
        return;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;
    for (const item of items) {
      if (item.name === productName) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const index = items.indexOf(item);
          items.splice(index, 1);
        }
        return;
      }
    }
  },
};
card.add({ name: "🍎 Apple", price: 50 });
card.add({ name: "🍌 Banana", price: 60 });
card.add({ name: "🍌 Banana", price: 60 });
card.add({ name: "🍇 Grapes", price: 70 });
card.add({ name: "🍉 Watermelon", price: 90 });
card.add({ name: "🍉 Watermelon", price: 90 });

console.table(card.getItems());

card.remove("🍉 Watermelon");

console.table(card.getItems());

// card.clear();
// console.table("тут пустий масив після натискання clear", card.getItems());

card.increaseQuantity("🍎 Apple");
card.decreaseQuantity("🍌 Banana");
card.decreaseQuantity("🍉 Watermelon");
console.table(card.getItems());
console.log("Total price:", card.countTotalPrice());

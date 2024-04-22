const stars = 2;
let price;

switch (stars) {
  case 1:
    price = 20;
    break;
  case 2:
    price = 40;
    break;
  default:
    console.log("Такої кількості зірок немає!");
}

console.log(price);

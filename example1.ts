interface Item {
  price: number;
  quantity: number;
  discount: number;
}

// contoh yang tidak menerapkan DRY
function calculatePriceForItem1(item: Item) {
  const totalPrice1 = item.price * item.quantity;
  const discount1 = item.discount;
  const finalPrice1 = totalPrice1 - discount1;
  return finalPrice1;
}
function calculatePriceForItem2(item: Item) {
  const totalPrice2 = item.price * item.quantity;
  const discount2 = item.discount;
  const finalPrice2 = totalPrice2 - discount2;
  return finalPrice2;
}

// contoh yang menerapkan DRY
function calculatePriceForItem(item: Item) {
  const totalPrice = item.price * item.quantity;
  const discount = item.discount;
  const finalPrice = totalPrice - discount;
  return finalPrice;
}

const item1: Item = {
  price: 100,
  quantity: 5,
  discount: 10,
};

const item2: Item = {
  price: 50,
  quantity: 3,
  discount: 5,
};

console.log(calculatePriceForItem(item1));
console.log(calculatePriceForItem(item2));

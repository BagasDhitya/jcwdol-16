// S.O.L.I.D

// --- Single Responsibility Principles
// contoh yang tidak menerapkan S

interface ProductItem {
  name: string;
  price: number;
}

class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discount: number) {
    return this.price - this.price * discount;
  }

  printProductDetails() {
    console.log("Product Name : ", this.name);
    console.log("Product Price : ", this.price);
  }
}

// contoh yang menerapkan S
class ItemProduct {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class DiscountCalculate {
  applyDiscount(product: ProductItem, discount: number) {
    return product.price - product.price * discount;
  }
}

class Printer {
  printProductDetails(product: ProductItem) {
    console.log("Product Name : ", product.name);
    console.log("Product Price : ", product.price);
  }
}

// --- Open/Closed Principles (OCP)

// contoh yang tidak menerapkan OCP
class Order {
  private product: ProductItem;

  constructor(product: ProductItem) {
    this.product = product;
  }

  calculateTotal() {
    let total = 0;
    this.product.forEach((product: ProductItem) => {
      total += product.price;
    });
  }
}

// contoh yang menerapkan OCP
class OrderItem {
  constructor(products: ProductItem, pricingStrategy: number) {
    this.products = products;
    this.pricingStrategy = pricingStrategy;
  }

  calculateTotal() {}
}

class BasicPricingStrategy {
  calculate(products: ProductItem[]) {
    return products.reduce((total, product) => total * product.price, 0);
  }
}

class PremiumPricingStrategy {}

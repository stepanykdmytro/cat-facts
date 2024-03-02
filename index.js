class Store {
    constructor() {
      this.products = [];
    }

    addProduct(product) {
      this.products.push(product);
    }

    removeProduct(product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }

    calculateTotalValue() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }

  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  // Example usage
  const myStore = new Store();

  const product1 = new Product('Laptop', 1000);
  const product2 = new Product('Phone', 500);
  const product3 = new Product('Headphones', 50);

  myStore.addProduct(product1);
  myStore.addProduct(product2);
  myStore.addProduct(product3);

  console.log('Products in the store:', myStore.products);

  const totalValue = myStore.calculateTotalValue();
  console.log('Total value of products:', totalValue);

  myStore.removeProduct(product2);
  console.log('After removing a product:', myStore.products);
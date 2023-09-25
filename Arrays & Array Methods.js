const products = [
    { name: "Product 1", price: 45 },
    { name: "Product 2", price: 55 },
    { name: "Product 3", price: 60 },
    { name: "Product 4", price: 40 },
  ];
  
  const expensiveProducts = products.filter(product => product.price > 50);
  console.log("Expensive products:", expensiveProducts);
  
// Lesson 7: Map, Filter, Reduce

const products = [
  { name: "laptop", price: 999 },
  { name: "monitor", price: 399 },
  { name: "keyboard", price: 79 },
  { name: "mouse", price: 49 },
];

// Exercise 1 - map: extract names
const names = products.map((product) => product.name);
console.log(names); // ['laptop', 'monitor', 'keyboard', 'mouse']

// Exercise 2 - map with transformation: apply 20% discount
const discounted = products.map(function (product) {
  return {
    name: product.name,
    discountedPrice: parseFloat((product.price * 0.8).toFixed(2)),
  };
});
console.log(discounted);

// Arrow function version
const discountedArrow = products.map((product) => ({
  name: product.name,
  discountedPrice: parseFloat((product.price * 0.8).toFixed(2)),
}));
console.log(discountedArrow);

// Exercise 3 - filter: products over $100
const over100 = products.filter((product) => product.price > 100);
console.log(over100);

// Exercise 4 - filter with multiple conditions: price > 50 AND name longer than 5 chars
const nameLength = products.filter(
  (product) => product.price > 50 && product.name.length > 5
);
console.log(nameLength);

// Exercise 5 - reduce: total cost of all products
const total = products.reduce((acc, item) => acc + item.price, 0);
console.log(total); // 1526

// Exercise 6 - chaining: filter > $50, apply 10% discount, reduce to total
const chainedTotal = products
  .filter((product) => product.price > 50)
  .map((product) => parseFloat((product.price * 0.9).toFixed(2)))
  .reduce((acc, item) => acc + item, 0);
console.log(chainedTotal); // 1329.3
console.log(chainedTotal.toFixed(2)); // "1329.30" for display

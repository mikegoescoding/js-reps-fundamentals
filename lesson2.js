// Lesson 2: Functions

// Exercise 1 - function declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(9, 10)); // 19

// Exercise 2 - function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};
console.log(add2(20, 5)); // 25

// Exercise 3 - arrow function (concise body)
const add3 = (num1, num2) => num1 + num2;
console.log(add3(100, 75)); // 175

// Exercise 4 - default parameters
const multiply = (var1 = 1, var2 = 1) => {
  return var1 * var2;
};
console.log(multiply(10, 9)); // 90
console.log(multiply());      // 1

const multiConcise = (var1 = 1, var2 = 1) => var1 * var2;
console.log(multiConcise(20, 15)); // 300
console.log(multiConcise());       // 1

// Exercise 5 - bringing it all together (all 3 formats)
function describeProduct(name, price, inStock) {
  return `The ${name} price is $${price}, however you're SOL because it's currently ${inStock ? "In Stock" : "Out of Stock"}`;
}
console.log(describeProduct("laptop", 999, false));

const describeProduct2 = function (name, price, inStock) {
  return `The ${name} price is $${price}, and you're in luck because it's currently ${inStock ? "In Stock" : "Out of Stock"}`;
};
console.log(describeProduct2("monitor", 150, true));

const describeProduct3 = (name, price, inStock) =>
  `The ${name} price is $${price}, and you're in luck because it's currently ${inStock ? "In Stock" : "Out of Stock"}`;
console.log(describeProduct3("keyboard", 49, true));

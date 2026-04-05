// Lesson 5: Loops

// Exercise 1 - for loop 1 to 10
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// Exercise 2 - forEach with index
const products = ["laptop", "monitor", "keyboard", "mouse", "headphones"];
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product}`);
});

// Exercise 3 - while countdown
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

// Exercise 4 - summarizeCart combining forEach and for loop
function summarizeCart(products) {
  products.forEach(function (product, index) {
    console.log(index + 1, product);
  });
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    count++;
  }
  console.log("Total items:", count);
}
summarizeCart(["laptop", "monitor", "keyboard", "mouse", "headphones"]);

// Bonus - backwards loop
const items = ["laptop", "monitor", "keyboard", "mouse", "headphones"];
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}

// Bonus - screwing around: filter inside a for loop
for (let i = 0; i < items.length; i++) {
  const filt = items.filter(item => i % 2 === 0);
  console.log(filt[i]);
}
// Returns items at even indexes (0, 2, 4) and undefined at odd indexes
// because filter returns empty array when condition is false

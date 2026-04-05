// Lesson 1: Variables & Types

// Exercise 1 - declaring variables
const name = "Michael";
let age = 1;
const favNum = 19;
console.log(name, age, favNum);

// Exercise 2 - reassignment
let score = 0;
score = 10;
score = score + 5;
console.log(score); // 15

// Exercise 3 - const cannot be reassigned
// const city = "Austin";
// city = "San Antonio"; // TypeError: Assignment to constant variable
let city = "Austin";
city = "San Antonio";
console.log(city);

// Exercise 4 - data types
const username = "studentboy";
const zipCode = "90210";
const hasProfile = false;
const personalQuote = null;
console.log(username, zipCode, hasProfile, personalQuote);

// Exercise 5 - typeof
console.log(typeof username);     // string
console.log(typeof zipCode);      // string
console.log(typeof hasProfile);   // boolean
console.log(typeof personalQuote); // object (famous JS bug — null is not actually an object)

// Exercise 6 - putting it all together
const productName = "laptop";
const productPrice = 999;
let inStock = true;
inStock = false;
console.log(productName, inStock, typeof productPrice);
// laptop false number

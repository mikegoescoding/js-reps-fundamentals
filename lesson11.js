// Lesson 11: Destructuring & Spread

// --- Exercise 1: object destructuring ---
const product = { name: "laptop", price: 999, inStock: true };
const { name, price, inStock } = product;
console.log(name, price, inStock);
// laptop 999 true

const dailyCarry = {
  firstItem: "keys",
  secondItem: "wallet",
  thirdItem: "phone",
};
const { firstItem, secondItem, thirdItem } = dailyCarry;
console.log(firstItem, secondItem, thirdItem);
// keys wallet phone

// --- Exercise 2: array destructuring ---
const colors = ["red", "green", "blue", "yellow"];
const [first, second] = colors;
console.log(first, second);
// red green

// skipping items with empty commas
const drinks = ["water", "soda", "milk", "juice"];
const [, secondDrink, , fourthDrink] = drinks;
console.log(secondDrink, fourthDrink);
// soda juice

// --- Exercise 3: destructuring in function parameters ---
function describeUser({ name, memberSince }) {
  return `${name} has been a member since ${memberSince}`;
}
const user = { name: "Michael", age: 33, memberSince: 2004 };
console.log(describeUser(user));
// Michael has been a member since 2004

function nutritionFacts({ calories, fat, carbohydrates, fiber, protein }) {
  return `A medium sized apple contains ${calories} calories. There are ${fat}g of fat, ${carbohydrates}g of carbohydrates, and ${fiber}g of fiber. They are not a significant source of protein, only offering approximately ${protein}g.`;
}
const apple = {
  calories: 95,
  fat: 1.5,
  carbohydrates: 32,
  fiber: 4,
  protein: 1,
};
console.log(nutritionFacts(apple));

// --- Exercise 4: spread ---

// merging arrays
const fruits = ["apple", "banana"];
const veggies = ["carrot", "broccoli"];
const produce = [...fruits, ...veggies];
console.log(produce);
// ["apple", "banana", "carrot", "broccoli"]

// merging objects — last spread wins on conflicts
const defaults = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { ...defaults, theme: "dark" };
console.log(userPrefs);
// { theme: "dark", language: "en", fontSize: 14 }

// bonus: spreading an object into an array
const objectz = { one: "one", two: "two", three: "three", four: "four" };
const array = ["thing", "do", "words", "you"];
const lyrics = [{ ...objectz }, ...array];
console.log(lyrics);
// object lands at index 0, strings at 1-4
console.log(
  lyrics[0].one,
  lyrics[1],
  lyrics[0].two,
  lyrics[2],
  lyrics[0].three,
  lyrics[3],
  lyrics[0].four,
  lyrics[4],
);
// one thing two do three words four you

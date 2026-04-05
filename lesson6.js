// Lesson 6: Objects

// Exercise 1 - create and access
const product = {
  item: "Headphones",
  brand: "Sony",
  price: 42,
  onSale: false,
  inStock: true,
};
console.log(product.brand);    // dot notation
console.log(product.item);     // dot notation
console.log(product.price);    // dot notation
console.log(product.onSale);   // dot notation
console.log(product["inStock"]); // bracket notation

// Exercise 2 - add, update, delete
product.rating = 4.5;
console.log(product); // rating added

product.price = 99;
console.log(product); // price updated

delete product.onSale;
console.log(product); // onSale removed

// Exercise 3 - Object.keys and Object.values
console.log(Object.keys(product));
console.log(Object.values(product));

Object.keys(product).forEach((key) => {
  console.log(key, product[key]);
});

// Exercise 4 - user object and greetUser function
const user = {
  username: "mike42",
  name: "Michael",
  age: 42,
  isLoggedIn: true,
  tier: "free",
  userSince: 2004,
};

function greetUser(user) {
  return `Hi ${user.username}, you are currently ${
    user.isLoggedIn
      ? "logged into your account. Happy browsing"
      : "logged out. Please log in again"
  }. Thanks for being a user since ${user.userSince}!`;
}
console.log(greetUser(user));

// Bonus - array of user objects
const users = [
  {
    username: "mike42",
    name: "Michael",
    age: 42,
    isLoggedIn: true,
    tier: "free",
    userSince: 2004,
  },
  {
    username: "2103308004",
    name: "Mike Jones",
    age: 39,
    isLoggedIn: false,
    tier: "Pro",
    userSince: 2001,
  },
];

function greetUsers(users) {
  users.forEach((user) => {
    console.log(
      `Hi ${user.username}, you are currently ${
        user.isLoggedIn
          ? "logged into your account. Happy browsing"
          : "logged out. Please log in again"
      }. Thanks for being a user since ${user.userSince}!`
    );
  });
}
greetUsers(users);

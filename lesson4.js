// Lesson 4: Arrays

// Exercise 1 - create and access
const colors = ["red", "orange", "yellow", "green", "blue"];
console.log(colors[0]);              // red
console.log(colors[colors.length - 1]); // blue (dynamic last item)

// Exercise 2 - add and remove
colors.push("purple");
console.log("push", colors);

colors.unshift("pink");
console.log("unshift", colors);

colors.pop();
console.log("pop", colors);

colors.shift();
console.log("shift", colors);

// Exercise 3 - indexOf and includes
console.log(colors.indexOf("yellow"));  // 2
console.log(colors.indexOf("black"));   // -1 (not found)
console.log(colors.includes("green"));  // true
console.log(colors.includes("black"));  // false

// Exercise 4 - slice and splice
const animals = ["cat", "dog", "elephant", "tiger", "lion"];
console.log(animals.slice(2, 4)); // ["elephant", "tiger"] — original unchanged
console.log(animals);             // original intact
console.log(animals.splice(1, 1)); // ["dog"] — returns what was removed
console.log(animals);              // "dog" is gone

// Exercise 5 - manageCart function
function manageCart() {
  const cart = ["cookie", "cake", "pie"];
  cart.push("ice cream");
  cart.shift();
  console.log(cart.includes("cookies")); // false (note: "cookies" vs "cookie")
  return cart;
}
console.log(manageCart()); // ["cake", "pie", "ice cream"]

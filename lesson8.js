// Lesson 8: Scope & Closures

// Exercise 1 - predict the output
const color = "blue";

function printColor() {
  console.log(color);
}

printColor();

// Prediction: "blue" — printColor reaches up to global scope to find color
// Result: "blue"

// Exercise 2 - predict the output
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter();
counter();
counter();
// Prediction:
// 1, 2, 3
// Result:
// 1, 2, 3

// Exercise 3 - predict the output
function outer() {
  const x = 10;

  function inner() {
    const y = 20;
    console.log(x + y);
  }

  inner();
  //   console.log(y);
}

outer();
// Prediction:
// first log: 30 - can see both x and y
// second log: ReferenceError, cannot see y
// Result:
// first log: 30
// second log: ReferenceError: y is not defined

// Exercise 4 - predict the output
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
console.log(double(10));

// Prediction:
// (double(5) output: 10 - doubling 5
// (triple(5)) output: 15 - tripling 5
// (double(10)) output: 20 - doubling 10
// Result:
// 10, 15, 20

// Exercise 5 — write a closure from scratch
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const howdy = makeGreeter("Howdy");
const wazzup = makeGreeter("Wazzup");

console.log(howdy("Mike")); // Output: Howdy, Mike
console.log(wazzup("Big Dawg")); // Output: Wazzup, Big Dawg

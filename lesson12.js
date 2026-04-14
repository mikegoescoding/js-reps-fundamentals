// Lesson 12: Callbacks & the Event Loop

// Exercise 1 - basic setTimeout
console.log("start");
setTimeout(function () {
  console.log("timeout");
}, 1000);
console.log("end");
// start → end → timeout

// Exercise 2 - multiple timeouts at 0ms
console.log("a");
setTimeout(function () {
  console.log("b");
}, 0);
setTimeout(function () {
  console.log("c");
}, 0);
console.log("d");
// a → d → b → c

// Exercise 3 - passing a function reference
function greet() {
  console.log("hello");
}
console.log("before");
setTimeout(greet, 500);
console.log("after");
// before → after → hello

// Exercise 4 - nested timeouts
console.log("1");
setTimeout(function () {
  console.log("2");
  setTimeout(function () {
    console.log("3");
  }, 500);
}, 500);
console.log("4");
// 1 → 4 → 2 (500ms) → 3 (1000ms total)

// Exercise 5 - functions with mixed sync/async
function doFirst() {
  console.log("first");
}
function doSecond() {
  setTimeout(function () {
    console.log("second");
  }, 0);
}
function doThird() {
  console.log("third");
}
doFirst();
doSecond();
doThird();
// first → third → second

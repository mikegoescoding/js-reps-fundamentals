# js-fundamentals

JavaScript fundamentals practice — exercises covering core concepts needed for full stack development.

## Lessons

### Lessons 1–8 — run with Node.js

```bash
node lesson1.js
node lesson2.js
# etc.
```

- **Lesson 1** — Variables & types: let, const, var, typeof, primitive data types
- **Lesson 2** — Functions: declarations, expressions, arrow functions, default parameters
- **Lesson 3** — Control flow: if/else, ternary operators, switch statements
- **Lesson 4** — Arrays: create, access, push, pop, slice, splice, indexOf, includes
- **Lesson 5** — Loops: for, while, forEach, backwards loops, loop control
- **Lesson 6** — Objects: key/value pairs, dot vs bracket notation, Object.keys, Object.values
- **Lesson 7** — Array methods: map, filter, reduce, method chaining
- **Lesson 8** — Scope & closures: lexical scope, closure pattern, factory functions, private state

### Lesson 9 — The DOM

**Files:** `lesson9.html`, `lesson9.css`, `lesson9.js`
Open `lesson9.html` with Live Server in VS Code — no Node required.

- Selecting elements with `querySelector`
- Reading and updating content with `textContent`
- Changing styles dynamically with `element.style`
- Adding, removing, and toggling CSS classes with `classList`
- Creating and appending elements with `createElement` and `append`
- Responding to click events with `addEventListener`
- Building a dynamic list with an incrementing counter
- Building an input-driven list (todo app pattern) with empty input guard using `trim()`

### Lesson 10 — Events

**Files:** `lesson10.html`, `lesson10.js`
Open `lesson10.html` with Live Server in VS Code — no Node required.

- The event object — `event.target`, `event.type`, `event.preventDefault()`
- `"input"` event for real-time text mirroring as you type
- `"click"` event with empty input guard, DOM manipulation, and input clearing
- Event delegation — one listener on a parent `ul` handling all child `li` clicks
- `element.remove()` — deleting elements from the DOM
- Silent failure — referencing a method vs calling it (missing parentheses)

### Lesson 11 — Destructuring & Spread

**Files:** `lesson11.js`
Run with `node lesson11.js`

- Object destructuring — pulling properties into standalone variables
- Array destructuring — including skipping indexes with empty commas
- Destructuring in function parameters — only pulling what the function needs
- Spread with arrays — merging and combining
- Spread with objects — merging and overriding, last spread wins on conflicts
- Edge case: spreading an object into an array

### Lesson 12 — Callbacks & the Event Loop

**Files:** `lesson12.js`
Run with `node lesson12.js`

- How JavaScript executes code one thing at a time (single threaded)
- The call stack, Web APIs, and callback queue
- Why async callbacks always run after synchronous code — even at 0ms
- Nested callbacks and why they become "callback hell"
- Passing function references vs calling functions immediately

## Tech stack

JavaScript (ES6+), Node.js, Browser APIs

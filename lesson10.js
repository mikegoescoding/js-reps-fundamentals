// Lesson 10: Events

// --- Element selection ---
const btn = document.querySelector("#submitBtn");
const preview = document.querySelector("#preview");
const input = document.querySelector("#textInput");
const itemList = document.querySelector("#itemList");

// --- Exercise 1: event object ---
btn.addEventListener("click", function (event) {
  console.log("event object:", event);
  console.log("event.target:", event.target);
  console.log("event.type:", event.type);
});

// --- Exercise 2: input event — real-time preview ---
input.addEventListener("input", function (event) {
  preview.textContent = event.target.value;
});

// --- Exercise 3: click event — build a list ---
btn.addEventListener("click", function () {
  if (input.value.trim() === "") return;
  const entry = document.createElement("li");
  entry.textContent = input.value;
  itemList.append(entry);
  clearText();
});

function clearText() {
  input.value = "";
  preview.textContent = "";
}

// --- Exercise 4: event delegation — click li to remove it ---
itemList.addEventListener("click", (event) => event.target.remove());

// Lesson 9: The DOM

// --- Element selection ---
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const btn = document.querySelector("#btn");
const colorBtn = document.querySelector("#colorBtn");
const toggleBtn = document.querySelector("#toggleBtn");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const textInput = document.querySelector("#addTextInput");
const inputBtn = document.querySelector("#addTextBtn");
const dynamicList = document.querySelector("#dynamicList");

// --- Content ---
title.textContent = "New title";
description.textContent = "New text content.";

// --- Styles ---
title.style.color = "red";

// --- Exercise 1: basic click event ---
btn.addEventListener("click", function () {
  console.log("clicked");
});

// --- Exercise 2: random color on click ---
colorBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = randomColor;
});

// --- Exercise 3: toggle highlight class ---
toggleBtn.addEventListener("click", function () {
  title.classList.toggle("highlight");
});

// --- Exercise 4: create and append a paragraph ---
const newElement = document.createElement("p");
newElement.textContent = "I was created by JavaScript";
document.body.appendChild(newElement);

// --- Exercise 4: incrementing list ---
let count = 0;
addBtn.addEventListener("click", function () {
  count++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${count}`;
  list.append(newItem);
});

// --- Exercise 5: input-driven list (todo pattern) ---
inputBtn.addEventListener("click", function () {
  if (textInput.value.trim() === "") return;
  const newListItem = document.createElement("li");
  newListItem.textContent = textInput.value;
  dynamicList.append(newListItem);
  textInput.value = "";
});

// select elements
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const btn = document.querySelector("#btn");
const colorBtn = document.querySelector("#colorBtn");
const toggleBtn = document.querySelector("#toggleBtn");

// read and change content
title.textContent = "New title";
description.textContent = "New text content.";

// change styles
title.style.color = "red";

// add/remove classes
title.classList.add("active");
title.classList.remove("active");

// listen for events
btn.addEventListener("click", function () {
  console.log("clicked");
});
colorBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = randomColor;
});
toggleBtn.addEventListener("click", function () {
  title.classList.toggle("highlight");
});

// creating and appending elms
const newElement = document.createElement("p");
newElement.textContent = "I was created by JavaScript";
document.body.appendChild(newElement);

// const newBtn = document.createElement("button");
// const newList = document.createElement("ul");
// newBtn.textContent = "Look at me, I'm a new button with way too much text";
// newList.id = "list";
// // document.body.appendChild(newBtn);
// // document.body.appendChild(newList);
// document.body.append(newBtn, newList);
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
let count = 0;
addBtn.addEventListener("click", function () {
  count++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${count}`;
  list.append(newItem);
});

const textContent = document.querySelector("#addTextInput");
const inputBtn = document.querySelector("#addTextBtn");
const newList = document.querySelector("#dynamicList");

inputBtn.addEventListener("click", function () {
  if (textContent.value.trim() === "") return;

  const newText = textContent.value;
  const newListItem = document.createElement("li");
  newListItem.textContent = newText;
  newList.append(newListItem);
  textContent.value = "";
});

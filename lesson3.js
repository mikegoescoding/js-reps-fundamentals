// Lesson 3: Control Flow

// Exercise 1 - fix the broken if/else
const temperature = 75;
if (temperature > 90) {
  console.log("hot");
} else if (temperature > 60) {
  console.log("warm");
} else {
  console.log("cold");
}
// warm

// Exercise 2 - fix the broken ternary
const age = 20;
const access = (age >= 18) ? "welcome" : "sorry, no entry";
console.log(access); // welcome

// Exercise 3 - fix the broken switch
const day = "Friday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}

// Exercise 4 - grade function from scratch
const grade = function (score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
};
grade(85); // B
grade(30); // F

// Exercise 5 - ternary from scratch
function isAdult(age) {
  return age >= 18 ? "adult" : "minor";
}
console.log(isAdult(20)); // adult
console.log(isAdult(15)); // minor

// Exercise 6 - switch from scratch
function getDayType(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "weekday";
    case "Saturday":
    case "Sunday":
      return "weekend";
    default:
      return "unknown";
  }
}
console.log(getDayType("Monday"));  // weekday
console.log(getDayType("Friday"));  // weekday
console.log(getDayType("Sunday"));  // weekend
console.log(getDayType("test"));    // unknown

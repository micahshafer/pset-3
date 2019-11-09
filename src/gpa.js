const readlineSync = require("readline-sync");

const gpa = readlineSync.question("\nEnter a letter grade: ").toLowerCase();

let letter = gpa.charAt(0);
let plusMinus = gpa.charAt(1);

if (letter ==! "a" || letter ==! "b" || letter ==! "c" || letter ==! "d" || letter ==! "f") {
    console.log("\nInvalid.")
  } else if (plusMinus ==! "+" || plusMinus ==! "-") {
    console.log("\nInvalid.")
  }


else {
    if (gpa === "a" || gpa === "a+") {
      console.log("\nYour GPA is 4.00");
  } else if (gpa === "a-") {
      console.log("\nYour GPA is 3.66");
  } else if (gpa === "b+") {
      console.log("\nYour GPA is 3.33");
  } else if (gpa === "b") {
      console.log("\nYour GPA is 3.00");
  } else if (gpa === "b-") {
      console.log("\nYour GPA is 2.66");
  } else if (gpa === "c+") {
      console.log("\nYour GPA is 2.33");
  } else if (gpa === "c") {
      console.log("\nYour GPA is 2.00");
  } else if (gpa === "c-") {
      console.log("\nYour GPA is 1.66");
  } else if (gpa === "d+") {
      console.log("\nYour GPA is 1.33");
  } else if (gpa === "d") {
      console.log("\nYour GPA is 1.00");
  } else if (gpa === "d-") {
      console.log("\nYour GPA is 0.66");
  } else if (gpa === "f+" || gpa === "f-") {
      console.log("\nInvalid.")
  } else if (gpa === "f") {
    console.log("\nYour GPA is 0.00");
  }
}

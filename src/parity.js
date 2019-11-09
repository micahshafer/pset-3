const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter a integer: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
const remainder = integer % 2;

if (Number.isNaN(integer)) {
  console.log("\nInvalid.")
}  else if (integer < MIN || integer > MAX) {
  console.log("\nInvalid.")
} else if (remainder > 0){
  console.log("\nOdd.")
} else {
  console.log("\nEven.")
}

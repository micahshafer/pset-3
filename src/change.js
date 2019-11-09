const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

Q= .25
D= .10
N= .05
P= .01


if (Number.isNaN(amount)) {
    console.log("invalid");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid");
} else {
  let Qu = Math.floor(amount/Q);
    let amount1 = amount % Q;
    let Di = Math.floor(amount1/D);
    let amount2 = amount1 % D;
    let Ni = Math.floor(amount1/D);
    let amount3 = amount2 % N;
    let Pe = Math.ceil(amount3/P);

    console.log("\n" + Qu + " quarters, " + Di + "dimes, " + Ni + " nickles, and" + Pe + " pennies." );
}

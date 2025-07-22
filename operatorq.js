//  1. Add two numbers and print the result. (Use + operator)

let a = 10;
let b = 5;
console.log("a + b = " + (a + b));
// console.log("a - b = " + (a - b));
// console.log("a * b = " + (a * b));
// console.log("a / b = " + (a / b));
// console.log("a % b = " + (a % b));


console.log("________________________________");
//  2. Find the remainder when 17 is divided by 3. (Use % operator)

let c = 17;
let d = 3;
console.log("remainder : " + (c % d));

console.log("________________________________");
//  3. Multiply three numbers: 2, 3, and 4. (Use * operator)
let x = 2, y = 3, z = 4;
console.log("multiple x y z = " + (x * y * y));

console.log("________________________________");
//  4. Subtract 100 from 250 and divide the result by 5. (Use - and / operators)
let p = 100, q = 250, r = 5;
console.log("Subtract 100 from 250 and divide the result by 5 : " + (q - p / r));

console.log("________________________________");

//  5. What will be the output?
let s = 5;
let t = ++s;
console.log(s, t);
console.log("________________________________");
// 6. Use += operator to add 10 to a variable initialized as 20
v = 20
v += 10
console.log("+= operator" + v);
console.log("________________________________");
// 7. Use *= to double the value of a variable initialized as 7
w = 7
w *= 14
console.log(" *= to double" + w);
console.log("________________________________");
//  8. What will be the output?
let e = 10;
e -= 3;
console.log(e);
console.log("________________________________");
// 9. Check if two numbers are equal using == or ===.
let g = 5;
let h = 10;
console.log(g == h);
console.log(g === h); 
console.log("________________________________");
//  10. Check if 25 is greater than 15 using > operator.
let A=25,B=15;
console.log(A>B);
console.log("________________________________");
// 11. Compare two numbers and print true if the first is smaller.
let C = 4, D = 5;
console.log(C < D);
console.log("________________________________");
//  12. What is the output?
   console.log(5 === "5");
console.log("________________________________");
//  13. Check if a number is between 10 and 50 using && operator.
let num = 25;
if (num > 10 && num < 50) {
  console.log("The number is between 10 and 50.");
} else {
  console.log("The number is NOT between 10 and 50.");
}
console.log("________________________________");
//  14. Check if a number is less than 10 or greater than 100 using || operator.
let number = 105;

if (number < 10 || number > 100) {
  console.log("The number is either less than 10 or greater than 100.");
} else {
  console.log("The number is between 10 and 100.");
}

console.log("________________________________");
//  15. What is the output?
   let n = true;
   let nq = false;
   console.log(n && nq);
   console.log("________________________________");
    // 16. Negate a boolean value using ! operator. Print the opposite of true
    let value = true;
let opposite = !value;

console.log(opposite);
 console.log("________________________________");
//   17. Check if a number is even or odd using the ternary operator.
let numbers = 7;

let result = (numbers % 2 === 0) ? "Even" : "Odd";

console.log("The number is", result);
 console.log("________________________________");
//  18. Check eligibility to vote using ternary. (age >= 18)
let age = 20;

let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";

console.log(eligibility);
 console.log("________________________________");

//  19. Find the greater of two numbers using the ternary operator
let num1 = 25;
let num2 = 40;

let greater = (num1 > num2) ? num1 : num2;

console.log("The greater number is", greater);
 console.log("________________________________");
//  20. Predict the output:
   let X = 5;
   let Y = X++ + ++X;
   console.log(Y)
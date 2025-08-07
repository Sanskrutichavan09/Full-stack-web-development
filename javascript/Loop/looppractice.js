//  1. Print numbers from 1 to 10.

for(let i=0;i<=10;i++){
    console.log(i);
}
//  2. Print the sum of numbers from 1 to 100

let sum = 0;
for(let i = 1;i<=100;i++){
    sum +=i;
    
        console.log(`sum of num is ${i} : `,sum)
   
}

//  3. Print even numbers between 1 and 50

for(let i =1;i<=50;i++){
    if(i % 2===0){
        console.log("even num : ",i);
    }
}
//  4. Print the multiplication table of a number (e.g., 7).
let table = 7;
for (let i=1;i<=10;i++){
    result =table *i;
    console.log(`table of 7 * ${i} : `,result);
}

//  5. Print reverse numbers from 10 to 1

for(let i=10;i>=1;i--){
    console.log("reverse num : ",i);
}
// 6. Find the factorial of a number

let num=4;
let factorial =1;
for (let i=1;i<=num;i++){
    factorial *=i;
}
console.log("Factorial of", num, "is:", factorial);

let reversenum = 12;
let str = reversenum.toString();
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

let reversedNum = Number(reversedStr);
console.log("Reversed number is:", reversedNum);


// 7. Check if the number is a palindrome
let similar = '101';
let isPalindrome = true;

for (let i = 0; i < similar.length / 2; i++) {
    if (similar[i] !== similar[similar.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(similar + " is a palindrome");
} else {
    console.log(similar + " is not a palindrome");
}

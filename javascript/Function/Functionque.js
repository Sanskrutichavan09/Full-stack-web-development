//  1. Create a function to print 'Hello, World!'.

function hello (){
    let hello ="Hello, world!";
    console.log("print hello:",hello);
}
hello();

// 2. Create a function that takes two numbers and returns their sum.

function sum (a,b){
// let a= 10;
// let b =20;
let c= a+b;
console.log("a + b : ",c);
}
sum(10,20);

//  3. Create a function that checks if a number is even or odd.

function evenodd (a){
    if (a%2==0){
      console.log('even num : ',a);
    }else{
      console.log('odd num : ',a);

    }
}
evenodd(7);

//  4. Create a function that returns the square of a number
function squrenum (a){
    let result = a*a;
    console.log("squre of num :",result);
}
squrenum(2);
//  5. Create a function that takes a name as input and prints a greeting message.
function greetingmsg(){
  let input = prompt("enter your name: ");
  
  console.log("hey beautiful, "+input+ "!");
}
greetingmsg();
//  6. Create a function that returns the largest of three numbers
function largenum(a,b,c){
if(b<a && c<a){
  console.log("a is greater : "+a);
 }else if(a<b && c<b){
  console.log("b is greater : "+b);
 }else if(a<c && b<c){
  console.log("c is greater : "+c);

 }else{
  console.log("invalid num");

 }
}
largenum(23,4,7);

// 7. Create a function to calculate the factorial of a number.
function fact (n){
  let result =1;
  for(let i=1;i<=n;i++){
    result*=i;
  }
return result;
};
console.log("fact num is : "+fact(2));

// 8. Create a function that reverses a given string.

function reverse(str){
  let reserved ="";
   for(let i=str.length-1;i>=0;i--){
      reserved +=str[i];
   }
   return reserved;
}
console.log(reverse("sanskruti"));

//  9. Create a function to check if a number is prime

function primeOrNot(n) {
  if (n <= 1) {
    return false; 
  }
  
  for (let i = 2; i < n; i++) { 
    if (n % i === 0) {
      return false; 
    }
  }
  
  return true;
}
console.log(primeOrNot(3));

// 0. Create a function that counts the number of vowels in a string.
function vowels(str) {
  let countVowel = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (countVowel.includes(str[i])) {
      count++;
    }
  }

  return count;
}


console.log("Number of vowels:", vowels("Sanskruti")); 

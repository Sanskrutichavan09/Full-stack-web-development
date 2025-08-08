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
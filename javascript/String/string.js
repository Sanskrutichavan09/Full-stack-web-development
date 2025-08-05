
//  1. Take a string input and convert it to uppercase using a string method

let user = prompt("enter a string : ");
let userupper = user.toUpperCase();

console.log("user input in uppercase : ",userupper);
// alert("upper string "+userupper);

// 2. Take a string input and convert it to lowercase using a string method.

let user1 =user.toLowerCase();
console.log("lower case string is :"+user1);
// alert("Lowercase string : "+ user1);

// 3. Ask the user for a string and print its length using a method.

let userlength = prompt("give String for length : ");
let stringlength = userlength.length;
 console.log("string length : ",stringlength);
//  alert("length string is : ",stringlength);



//  4. Ask the user to enter a sentence and count how many times the word 'the' appears using a string
//  method.

let countThe = prompt("enter sentence  : ");
let counttheis = "the";
let word = countThe.toLowerCase().split(" ");
let count =0;
for(let i= 0 ; i<countThe.length ; i++){

if (word[i]==counttheis){
    count++;
}
 console.log(`The word "the" appears ${count} time(s).`);

}

//  5. Take a string input and check if it ends with a particular word using endswith().

let endnum=prompt("check end num is currect or not : ");
let checknum=endnum.endsWith("i");
console.log("end is currect or not : "+checknum);
// alert("end num : ",checknum);


//  6. Input a string and check whether it starts with a specific word using startswith().

let startnum = prompt("check start value : ");
let numstart =startnum.startsWith("s");
console.log("start num is : "+numstart);

//  7. Ask the user to input a string and remove leading and trailing spaces using trim().

let input = prompt("input a string and remove leading and trailing spaces: ");
let input1 = input.trim();
console.log(input1);

// 8. Take a string and replace all spaces with hyphens (-) using replace().
let replacestr = "   sanskruti   ";
let putreplace = replacestr.replaceAll(" ","-");
console.log(putreplace);

//  9. Ask the user to input their name and print each character on a new line using a loop.
let namestr =prompt("enter your name");
for (let p =0;p<namestr.length;p++){
  console.log(namestr[p]);
}

// 10. Take a string input and split it into a list of words using split().

let word1 =prompt("enter string for split ");
let word2 = word1.split(" ");
console.log(word2);

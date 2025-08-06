// 1. Creation and Basic Access 

let arr = [1, 2, 3,4,5,6];
console.log(arr);
console.log(arr.length);
let arr1 = new 
Array(3); 
console.log(arr1);

console.log("_______________________________________________");
// 2. Adding/Removing Elements 

//push  add last value
let arrmethod = arr.push(4);
console.log(arrmethod);
console.log("push value 4 :",arr);

//pop   remove last value
let remove =arr.pop();
console.log("pop value 4 :",arr);

// unshift   add 1st value 
let addstartvalue = arr.unshift(9);
console.log("add start value unshift :",arr);

// shift()   remove 1st value 
let removefirst = arr.shift();
console.log("remove start value shift :",arr);

// splice(start, deleteCount, ...items) 
let splice =arr.slice(1 ,5)
console.log("splice:",splice);
console.log("splice:",arr);

// slice(start, end)

let cut=arr.slice(2,5);
console.log("slice:",cut);
console.log("slice:",arr);

console.log("_______________________________________________");

// 3. Searching and Finding

// includes() Checks if value exists 

let valueexit = arr.includes(2);
console.log("value exit of not :",valueexit);



// indexof()   Returns index of first match

let indexval = arr.indexOf(2);
console.log("value exit of not :",indexval);

// lastIndexOf() Last match index 

let lastindex = arr.lastIndexOf(6);
console.log("last value :",lastindex);


// find() Returns first match (based on condition) 
let found = arr.find(x => x > 2); 
console.log("find value : ",found);



//  indIndex() – Index of first match 
let indexvalue = arr.findIndex(x => x > 2); 
console.log(indexvalue);

console.log("_______________________________________________");

// 4. Sorting and Reversing
// sort() Sorts array elements arr.sort() 
let arr3 = [5,7,82,2,1,5];
let sortarry = arr3.sort();

console.log("sort array : ",sortarry);
// reverse() Reverses the order 
let reversearr = arr3.reverse();
console.log("reverse array : ",reversearr);

console.log("_______________________________________________");

// 5. Conversion and String Operations 

// Joins all elements into a string arr.join("-") 
let joinstr = arr3.join("-");
console.log("join string : ",joinstr);

// toString() Converts array to string
let convertstr = arr3.toString();
console.log("convert aaray to string : ",convertstr);

console.log("_______________________________________________");

// 6. Fill  

//  ill(value, start, end) Fills part of array with value arr.fill(0, 1, 3) 
let filled = [1, 2, 3].fill(0); 
console.log("fill : ",filled);

console.log("________________________END___________________________");

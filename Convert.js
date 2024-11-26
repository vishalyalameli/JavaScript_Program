// Convert String to Number 

var myFavnumber = "5";

console.log(myFavnumber);

console.log(typeof + myFavnumber);
console.log( typeof Number(myFavnumber));


// convert Number to String 

// var str = 5;

// console.log(str);
// console.log(typeof String(str));

// parseInt use  it can be convert string to Number

var myString = "45.6";

var result = parseInt(myString);
console.log(result);

// parseFloat use it can be convert Number to string 

var MyNumber = "45.6";

var Num = parseFloat(MyNumber);
console.log(Num);


// check val  Nan  value 

console.log(isNaN("5656")); // false 

console.log(isNaN("vishal"));

console.log(parseInt("fcgc"));


// + sign concatention  operator
const str = "hello" + " world";
console.log(str);

const sum = "10" + "20"
console.log(sum);

console.log("5" + 3) // concate  53

console.log(5 == "5");  //true only check value  not check which data type
console.log(5 === "5"); //  false both check which data type and value 
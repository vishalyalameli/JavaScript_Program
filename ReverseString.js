// Write a JavaScript program to reverse a given string. 
// function reverseString(str){

//     return  str.split('').reverse().join('');
// }
// console.log(reverseString('hello'));
// console.log(reverseString('Javascript'));
// console.log(reverseString('vishal'));
// console.log(reverseString('1233'));
// console.log(reverseString("45545"));

function reverseNumber(num){

    let reverse = num.toString();
     return reverse.split('').reverse().join('');
}
console.log(reverseNumber(4555));
console.log(reverseNumber(458965));
console.log(reverseNumber(258));

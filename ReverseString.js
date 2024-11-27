// Write a JavaScript program to reverse a given string. 
// function reverseString(str){

//     return  str.split('').reverse().join('');
// }
// console.log(reverseString('hello'));
// console.log(reverseString('Javascript'));
// console.log(reverseString('vishal'));
// console.log(reverseString('1233'));
// console.log(reverseString("45545"));

// function reverseNumber(num){

//     let reverse = num.toString();
//      return reverse.split('').reverse().join('');
// }
// console.log(reverseNumber(4555));
// console.log(reverseNumber(458965));
// console.log(reverseNumber(258));


const isreverse =(str) =>{
    let reverse = " ";
    for(let char = str.length-1; char>=2; char--){
        reverse = reverse + str[char];

    }
    return reverse
}
console.log(isreverse("vishal yalamei"));
//Execution Flow:

 
// Palindrome

const isPalindrome =(str) =>{
    let reverse = "";
    for (let char = str.length-1; char>=0 ;char--){
        reverse =reverse + str[char];
       
    }
    return str == reverse ? true : false
}
console.log(isPalindrome("level"));
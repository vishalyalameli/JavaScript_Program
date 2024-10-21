//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// function isPalindrome(str){

//     let lowerStr = str.toLowerCase();

//     let reverserd = '';
//     for(let i = lowerStr.length-1 ; i>= 0; i--){
//         reverserd +=lowerStr[i];                  //  reversed = reversed + lowerStr[i]
//     }
//     if(lowerStr === reverserd){
//         return true; 
//     }else{
//         return false
//     }

// }
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('hello'));


// function isPalindrome(str){

//     const reverserd =str. replace(/[^a-z0-9]/gi, '').toLowerCase();

//     const reverse = reverserd.split('').reverse().join('');

//      return reverse === reverserd;
// }
// console.log(isPalindrome('racecar')); //true
// console.log(isPalindrome('hello')); //false

function isPalindrome(num){

    let str = num.toString();

    let reverse = str.split('').reverse().join('');

    return reverse ===  str ;

}
console.log(isPalindrome(456));
console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(0));
console.log(isPalindrome(1));


let num = 5;
num *= 2;  // Equivalent to: num = num * 2;

console.log(num);  // Output: 10
variable *= value;
variable = variable * value;




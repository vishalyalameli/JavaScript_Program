//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str){

    let lowerStr = str.toLowerCase();

    let reverserd = '';
    for(let i = lowerStr.length-1 ; i>= 0; i--){
        reverserd +=lowerStr[i];
    }
    if(lowerStr === reverserd){
        return true; 
    }else{
        return false
    }

}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
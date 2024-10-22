// Write a JavaScript function to check if a given number is prime. 

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let  i= 2; i< num /2 ; i ++ ){
        if(num % i === 0){
            return false;
        }

    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(15));
console.log(isPrime(10));


// function isPrime(num){
//     if(num <=1){
//         return false;
//     }
//     for(let i = 2; i<= num /2; i++){
//         if( num % i === 0){
//         return false;
//         }
//     }
//     return true;

// }
// console.log(isPrime(2));
// console.log(isPrime(12));
// console.log(isPrime(17));

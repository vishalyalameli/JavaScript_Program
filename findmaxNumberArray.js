//Write a JavaScript program to find the maximum number in an array
// function FindmaxNumberArray (arr){
//     let max = [0]

//     for (let i =1; i<arr.length; i++){
//         if(arr [i] > max){
//             max = arr[i];
//         }
//     }
//     return max
// }

// let number = [10,20,30,40,50];
// let maxNumber = FindmaxNumberArray(number);
// console.log("The maximum Number is :", maxNumber);

// The maximum Number is : 50

 //Write a JavaScript program to find the minimum number in an array

function FindMinNumberArray (arr) {

    let min = arr[0]

    for(let i = 1; i< arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }

    }
    return min; 

}

let  Number = [10,20,30,40,50];
let MinNumber = FindMinNumberArray(Number);

console.log("The Minimum Number is:", MinNumber);

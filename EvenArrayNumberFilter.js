//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function FilterNumberArray(arr){

    return arr.filter(num => num %2 ===0);
}

console.log(FilterNumberArray([2,4,6,8,10,12,14,17]));
console.log(FilterNumberArray([2,47,6,87,10,12,14,17]))
console.log(FilterNumberArray([2,41,65,82,10,12,14,17]));
console.log(FilterNumberArray([27,41,67,8,10,12,14,17]))

// [    2,  4,  6, 8,    10, 12, 14] 
  // [ 2, 6, 10, 12, 14 ]
  // [ 2, 82, 10, 12, 14 ]
  // [ 8, 10, 12, 14 ]
function generatePermutations(arr, current,result){
    if(current.length === arr.length){  // If current combination has all numbers, add to result
        result.push(parseInt(current.join('')));
        return;

    }

    for(let i = 0 ; i<arr.length; i++){
         if(!current.includes(arr[i])){ // Avoid repeating numbers
            current.push(arr[i]); // Add number to current combination
            generatePermutations(arr,current, result); // Recursive call
            current.pop() ; // Backtrack
         }
    }
}
let arr = [9,8,5,4];
let result = [ ];
generatePermutations(arr, [] , result);
console.log(result);

/*[
    9854, 9845, 9584, 9548,
    9854, 9845, 9584, 9548,
    9485, 9458, 8954, 8945,
    9485, 9458, 8954, 8945,
    8594, 8549, 8495, 8459,
    5984, 5948, 5894, 5849,
    5498, 5489, 4985, 4958,
    4895, 4859, 4598, 4589
  ]*/


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
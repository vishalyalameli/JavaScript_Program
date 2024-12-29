 
 
  //find ArryDuplicate Arry

//  let arr = [10,20,30,10,20]

//  let UniQue = [ ]

//  for(let i = 0; i<= arr.length; i++){
//     for(let j = i +1 ;j<= arr.length; j++){
//         if(arr[i]===arr[j]){
//             UniQue.push(arr[i]);
//         }
//     }
//  }
//  console.log(UniQue);

//  node ArryDupli.js                
//  [ 10, 20 ]


//seperate string and integer 

let arr = [10, 'a', 20, 30, 'b', 'c'];
let a = []; // Array for numeric values
let b = []; // Array for non-numeric values
let aIndex = 0; // Index tracker for array `a`
let bIndex = 0; // Index tracker for array `b`

for (let i = 0; i < arr.length; i++) {
    // Check if the element is a number
    if (typeof arr[i] === 'number') {
        a[aIndex] = arr[i]; // Assign directly to `a` at current index
        aIndex++; // Increment index for `a`
    } else {
        b[bIndex] = arr[i]; // Assign directly to `b` at current index
        bIndex++; // Increment index for `b`
    }
}

console.log('Numeric values:', a); // Output: [10, 20, 30]
console.log('Non-numeric values:', b); // Output: ['a', 'b', 'c']


// o/p:
// Numeric values: [ 10, 20, 30 ]
// Non-numeric values: [ 'a', 'b', 'c' ]
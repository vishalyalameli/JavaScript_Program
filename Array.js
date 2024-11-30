
// Constructor Array
let fruit = new Array("mango","Apple","Pizza");

console.log(fruit);

// using arry literal

let fruitt =["a","b","c"];
console.log(fruitt);

// eg empty array

let fruits = ["a" ,"b","c","d"]
console.log(fruits[2]); // 2 c

// changes

let fruitss = ["mango", "banna","apple","orange"]
fruitss[4] ="Vishal";
console.log(fruitss);

// [ 'mango', 'banna', 'apple', 'orange', 'Vishal' ]

// For...... of Loop  it can be return  value in side the arrays 

let Vfruit = ["a","b", "c","d"];

// for(let item of Vfruit)
// console.log(item);
// a b c d

//OR
// for(let item= 0; item <Vfruit.length; item++){
//     console.log(Vfruit[item]);
// }

// for.....In Loop it can br return index number 


for(let item in Vfruit){
    console.log(item);
}

// ForEach loop in array..................

// Syntax:
// Array.forEach (function callback (CurrentValue, index, array ))

// let Forfruit =["a", "b", "c", "d", "e"];
// let result =[ ];
// Forfruit.forEach((CurrElem,index) =>{
//      result.push(`${CurrElem} ${index}`);
// });
// console.log(Forfruit); //print  the original the original array

// console.log(result);

// o/p [ 'a 0', 'b 1', 'c 2', 'd 3', 'e 4' ]


// Without using any method................

// let Forfruit =["a", "b", "c", "d", "e"];
//  let fruiit = [];
//  for(let i = 0; i <Forfruit.length; i++){
//     fruiit.push(`${Forfruit[i]} ${i}`)
//  }
//  console.log(fruiit); 

//  [ 'a 0', 'b 1', 'c 2', 'd 3', 'e 4' ]

// .map()  use it can be create new arry...............

// let Forfruit =["a", "b", "c", "d", "e"]
  
//  const myFun = Forfruit.map((CurElem,index) => {
//     return `${CurElem} ${index}`;
    

// });
// console.log(myFun);
 // without using .map ().......... 
//  let Forfruit =["a", "b", "c", "d", "e"]
// let result = [];
// for(let i = 0 ; i< Forfruit.length; i++){
//     result.push(`${Forfruit[i]} ${i}`)
// }
// console.log(result);


//Array method ........................
//Push.........

let fruuit = ["apple", "mango", "banna"]
console.log(fruuit.push("guva"));
console.log(fruuit);


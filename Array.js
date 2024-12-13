
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

// For...... of Loop  it can be return  value in side the arrays ...................................

let Vfruit = ["a","b", "c","d"];

// for(let item of Vfruit)
// console.log(item);
// a b c d

//OR
// for(let item= 0; item <Vfruit.length; item++){
//     console.log(Vfruit[item]);
// }

// for.....In Loop it can br return index number ............................................


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

// splice( ) it can be use the removing or replacing the content of an array ............................
// it can be return empty array  ([])
let art = ["apple","mango","banana","water"]

// art.splice(1,1);

art.splice(-1,1, "grapes");
console.log(art);

// searching and filter method ................................................
//indexOf method:  the indexOf method returns the first index at which given element can be found  syntx: indexOf(searchElement , fromIndex)
 
// let number = [ 1,2,3,4,5,6,7,8,9]

// console.log(number.indexOf(4,5));
// const reult = number.indexOf(4);
// console.log(reult); // o/p : 3

// lastIndexOf(): it can be searched for the backwords....................................

// const number = [1,2,6,3,4,5,6,7,8,8,9]
// const result =  number.lastIndexOf(6);
// console.log(result);

// Add dec at the end of the month..............

// const month = ["Jan","feb","march","jun","july"]

//  month.splice(month.length,0,"Dec");
// console.log(month);

// update march to MARCH..................

// const month = ["jan","feb"," march"]
// month.splice(2,3,"MARCH");
// console.log(month);

// delete method ...........................

// const month = ["jan","feb","march","april"]
// month.splice(1,1);
// console.log(month);

// Filter and find and search............................

// const number = [1,2,3,4,5,6,7,8,9]

// const result = number.find((curElem) => {
//     return curElem > 6
// })

// console.log(result);

// OR.........

//  const num = [1,2,3,4,5,6,7,8,9]
//  let result = null
//  for( let i = 0; i<num.length;i++){
//     if(num[i] > 6){
//         result = num[i];
//         break;
//     }
//  }
//  console.log(result);

// filter uniques values
  // filter ()  filter  it can  used for the  all record can be show [ { name: 'banana', price: '600' }, { name: 'mango', price: '800' } ]
  // find () method it can be used for the specific data or an condition show  // { name: 'banana', price: '600' }

// const product = [
//     {name :"apple", price:"500"},
//     {name:"banana", price:"600"},
//     {name:"mango", price:"800"}
// ]

// const result = product.find((curEle) =>{
//    return curEle.price >500;
// });
// console.log(result);

// findIndex ( ) it can be find the  index number ..................................... .......

// const   num = [1,2,3,4,5,6,7,8,9]

// const result1 = num.map((curElem) =>{
//   return curElem*5;

// });
// console.log(result1);

// const result = num.findIndex((curElem) =>{

//   return curElem >5;
// });
// console.log(result);

// filter Unique values  it can be use filter( ) and  indexOf( ) .....................
 // filter it can be remove the duplicate element
// const num = [1,2,2,3,4,5,6,5]

// let result = num.filter((curElem, index,arr)=>{ 

//   return arr.indexOf(curElem) === index;
// })
// console.log(result);

// return the string in capitalized.................................................. 

// const str = ["Apple","Mango", "banana","Water"]

// const result =  str.map((CurElem)=>{
//    return CurElem.toUpperCase();
// })

//even  array find ...................................

// const num = [1,2,3,4,5,6,7,8,10]
// const result = num.filter((curEle) =>{
//   if( curEle %2 ==0){
//     return curEle;
//   }

// })
// console.log(result);

// without in-built function ...................................
// const num = [1,2,3,4,5,6,7,8,10]
// let result= [ ]
// for(let i =0; i< num.length; i++){
//   if(num[i] % 2 ==0){
//     result[result.length]= num[i];
//   }

// }
// console.log(result);
// o/p :[ 2, 4, 6, 8, 10 ]


//  prefix name new arry all name start with Mr. .....................................

// const str = ["Vishal", "vikas", "vilas", "Yash"]
// const result = str.map((curEle) =>{
//   return `Mr ${curEle}`
// })
// console.log(result);

 // without in-built function ...................................

// const str = ["Vishal","vikas","vilas","yash"]
// let result =  []
// for(let i=0; i<str.length; i++){
//   result[result.length] = "Mr " + str[i];
// }
// console.log(result);


// calculate  price calculate ................................

// const num = [101,200,300,400,500]
// const result = num.reduce((accum, curEle) =>{
//   return  accum + curEle
// })
// console.log(result);

const  num  = [100,200,300,400,500]

let sum = 0;
for(let i = 0; i<num.length; i++){
   sum += num[i] // sum = sum + num[i]
}

console.log(sum);






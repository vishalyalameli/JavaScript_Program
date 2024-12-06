// Find length........................
// const str = "Vishal Yalameli";
// console.log(str.length);
// 15

// String search method indexOf(position , search );...............................
// let text = "vishal Yalameli";
// console.log(text.indexOf("Yalameli"));
// 7


// It can be convert string to array ...............................

// let str = "Hello World";

// let text = Array.from(str);

// let result =text.map((CurElem,index) =>{
//    return `${CurElem} - ${index}`;
// })
// console.log(result);
// [
//     'H - 0',  'e - 1',
//     'l - 2',  'l - 3',
//     'o - 4',  '  - 5',
//     'W - 6',  'o - 7',
//     'r - 8',  'l - 9',
//     'd - 10'
//   ]


//Serarch()  it can return position that match..................

// let str = "Java is Awesome";
// let result = str.search("Awesome");
// console.log(result);
// 8

//match()  and includes() and indexOf( ) ....................
//let str = "I am vishal";
//let result = str.match("am"); // [ 'am', index: 2, input: 'I am vishal', groups: undefined ]
//let result = str.includes("am");// true
// let result = str.indexOf("am");//2
// console.log(result);

// slice( ) extract a part of string and returns the extracted part in a new  string...........................
// slice(start ,end)
 
// let str =  "hello world";

// let result = str.slice(6);
// console.log(result); 
// world

//Replace ( ) it is case-sensitive  ..............................

//let text = "Vishal Yalameli";
//let result= text.replace("Vishal", " "); //    Yalameli
//let result= text.replace("Vishal", "Vikas "); // Vikas  Yalameli
//let result= text.replaceAll("l", "z "); // Vishaz  Yaz amez i
//console.log(result); 

// CharAt() : it returns the the character at specified  index position in string 
// note : it is used to give yhe particular index value

// let text = "Vishal Yalameli";
// let result = text.charAt(5); // l
// console.log(result);

// CharCodeAt(): the given charcodeAt() method it return the character at specified index value .....................................
 //note:  it return the index value code 
 // charcode of the capital A and small a is different work

 //A:65;

//  let text = "Vishal Yalameli";
//  let result = text.charCodeAt(5);  // 108
//  console.log(result);

// At () it can be return the character in specified index position  in a string  
//note: At() method it can be return same as CharAt();

//  

//  At() vs Chart() ..........................
// At () :
// it can be allows of the negative and positive  indexs .
//At(-4)

//char
 

// CharAt( ):
//it  can be only positive  index 


// replace ( ) ...................................................
// it is the case- insensitive  replacement 

// let text = "Hello World";
// let  result = text.replace(/Hello/i , "hello"); // it can be use regular expression Rgx
// console.log(result);

// trim()  it can be remove the space  first and last ..................................................
 
// let  text = " vishal  Yalameli           ";
// let result = text.trim();
// console.log(result);


// without using in built- function...................................................................................

// let text = "   Vishal Yalameli    ";
// let result = "";
// let start = 0;
// let end = text.length-1;


//  while(text[start] === " " && start < text.length){
//     start++;
//  }


//  while(text[end] === " " && end >=0){
//     end --;
//  }


//  if(start <= end){
//     for(let i = start; i <= end; i++){
//           result += text[i];
//     }
//  }
//  //console.log(result);
//  console.log(`Result : "${result}"`);
//  console.log(` start Index :${start}`); //3
//  console.log(`end index ${end}`); // 17 
 //Vishal Yalameli  // start
//  Result : Vishal Yalameli
//  start Index :3
// end index 17


// split ()  it can be the split into an array of the substring based on a specified the delometer....................

// let text = "Hello world i am java";

// let result = text.split("");  // it is without space
// [
//     'H', 'e', 'l', 'l', 'o',
//     ' ', 'w', 'o', 'r', 'l',
//     'd', ' ', 'i', ' ', 'a',
//     'm', ' ', 'j', 'a', 'v',
//     'a'
//   ]

// let result = text.split(" "); // it gives the space 
// [ 'Hello', 'world', 'i', 'am', 'java' ]


// let result = text.split(" ,"); //it can be the direct convert string to Array
// [ 'Hello world i am java' ]


// console.log(result);

// reverse( ).........................................
// an array  can be return the used for the split (" ,").reverse( );

let text = ""


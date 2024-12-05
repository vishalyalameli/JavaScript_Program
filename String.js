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

// slice( ) extract a part of string and returns the extracted part in a new  string
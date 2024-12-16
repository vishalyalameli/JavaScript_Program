// Find id for this object 

const object = [
    
        {"id": 1 , name : "Vishal"},
       { "id":2 , name : "vikas"},
        {"id":3 , name : "vilas"},
    
];

const  targetId = 1;
const foundObject =  object.find(obj => obj.id === targetId);

console.log(foundObject);

//              OR



const obje = {
    1 : { "id" : 1 , name :"vishallllll"},
    2: { "id":  2 , name: "viakssss"},
    3: { "id" : 3, name: "vilaslll" },
}

const taargetId = 3;

const foundObjectt = obje[taargetId];

console.log(foundObjectt);
  

//  what will  be output.......................................

// const target = {a:1, b:2};
// const source = {b:3,c:4};

// const mergedobject = Object.assign( { } ,target , source);
// console.log(mergedobject);

// { a: 1, b: 3, c: 4 }

// page No 16 ....................................

 const Student = {
    name: "vishal",
    age: 23,
    grades:{
        marathi: 85,
        science: 90,
        History:80,
    },

 }
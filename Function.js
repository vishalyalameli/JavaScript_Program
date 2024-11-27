// WAP  
// function sum(a,b){
//     console.log(a + b);
// }
//  sum (5 ,5);

 // using return

 function sum (a,b){
   return a+b;
    
 }
  console.log(sum( 7,3));


   // function expression/ anonymous/ fat arrow function

   //function expression
   var result = function sum(a ,b){
    console.log( a + b);
   }

   result (5 ,10);

   // function anonymous

   var resu = function(a, b){
    console.log(a + b);

   }
   resu( 5,5);

   // Default Parameter function

   function sum(a= 10, b = 20){
    return a + b ;
                
   }
   console.log(sum(5,15)); //20
   console.log(sum()); //30

   //fat arrow function 

   const summ =(a, b) =>{
    console.log(` ${a} and ${b} is ${a+b}`);
   }
   summ(5,3);

   // eg 
   const greet =()=>
         console.log('like  and  share and follow ');

   greet();
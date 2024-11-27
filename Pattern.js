// for (var i = 1; i<=5; i++){
//     var pattern = "";
//     for (var j = 1; j<=i; j++){
//          pattern =  pattern+"*";
//     }
//     console.log(pattern);
// }

//O/p
// *
// **
// ***
// ****
// *****

for (var i = 1; i<=5; i++){
    var patternn = "";

    for(var j =1; j <=5 -i; j++){
        patternn += " ";
    }
    for(var k =1; k<=i; k++){
        patternn += "*";
    }
    console.log(patternn);
}
 // O/p
// *
// **
// ***
// ****

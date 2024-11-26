
// if condition

var temp = 40;
if (temp > 30) {
    console.log("let go to beatch");
} else {
    console.log(" watch tv at home");
}

//  if condition
let userAge = 20;
let isCitizen = true;
let isRegistered = true;

if (userAge >= 18) {
    if (isCitizen) {
        if (isRegistered) {
            console.log("you are eligible ");
        } else {
            console.log("you are not eligible due to registered");
        }
    } else {
        console.log("you are not eligible due to citizen");
    }
} else {
    console.log(' you are not eligible');
}


// even od number 

var   num = "40";

if(num  % 2 ===0){
    console.log("Num is Even");
}else{
    console.log("num is odd ");
}


// num is zero check

var num = 10;
if(num ==0){
    console.log("num is zero");
}
else if(num > 0){
    console.log("Num is positive");

}else{
    console.log("num is negative");
}

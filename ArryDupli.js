 
 
 f    //find ArryDuplicate Arry
 let arr = [10,20,30,10,20]

 let UniQue = [ ]

 for(let i = 0; i<= arr.length; i++){
    for(let j = i +1 ;j<= arr.length; j++){
        if(arr[i]===arr[j]){
            UniQue.push(arr[i]);
        }
    }
 }
 console.log(UniQue);

//  node ArryDupli.js                
//  [ 10, 20 ]
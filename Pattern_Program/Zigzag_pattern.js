function zigzag(rows){
    for (let i= 1; i<=rows; i++){
        let row = '';
        for(let j =1; j<=rows; j++){
            row += (i + j) %2 === 0 ? '*' : ' ';
        }
        console.log(row);
    }
}
zigzag(5);
// * * *
//  * * 
// * * *
//  * *
// * * *
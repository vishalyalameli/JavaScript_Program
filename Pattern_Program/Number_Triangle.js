function numberTriangles(rows){
    for (let i = 1; i<=rows; i++){
        let row = " ";
        for(let j = 1; j<=i; j++){
            row += j;
            if(j < i){
               row += ' ';
            }
        }

        console.log(row);
       
    }
    
}
numberTriangles(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

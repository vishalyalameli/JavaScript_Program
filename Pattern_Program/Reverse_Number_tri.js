function reverseNumberTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = i; j >= 1; j--) {
        row += j + ' ';
      }
      console.log(row);
    }
  }
  reverseNumberTriangle(5);

// 1 
// 2 1 
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
  
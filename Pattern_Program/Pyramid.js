function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
      console.log(row);
    }
  }
  pyramid(5);
//   *
//   ***
//  *****
// *******
// *********
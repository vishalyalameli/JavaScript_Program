function diamond(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
      console.log(row);
    }
    for (let i = rows - 1; i >= 1; i--) {
      let row = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
      console.log(row);
    }
  }
  diamond(5);
//   *
//   ***
//  *****
// *******
// *********
// *******
//  *****
//   ***
//    *

// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  matrix.map(function rever (v, i) {
       if( i % 2 != 0) {
       v.reverse();
       }
    });
    return matrix.flat();
 }

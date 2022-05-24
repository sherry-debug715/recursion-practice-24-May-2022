/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
function range(num1, num2) {
  if ((num2 < num1) || (num1 >= num2)) return [];
  return [...[num1], ...range((num1+1), num2)]
}
 // [1, 2, 3, 4]
console.log(range(1, 5));
// [...[1], ...range(2, 5)]
// [...[2], ...range((3, 5)]
// [...[3], ...range(4, 5)]
// [...[4], ...range(5, 5)] return

// [4]
// [3,4]
// [2,3,4]
// [1,2,3,4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
function sumToN(num) {
  if(num === 0) {
    return 0
  } else if(num < 0) {
    return null
  }
  return num += sumToN(num -  1)
}


sumToN(5) // returns 15
// 5 += sumToN(4)
// 4 += sumToN(3)
// 3 += sumToN(2)
// 2 += sumToN(1)
// 1 += sumToN(0)
// 1 += 0 = 1
// 2 + 1 = 3
// 3 + 3 = 6
// 4 + 6 = 10
// 5 + 10 = 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

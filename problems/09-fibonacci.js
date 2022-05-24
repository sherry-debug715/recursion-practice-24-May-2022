/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// your code here
function fibonacci(num) {

  if(num === 1 || num === 2) return 1
  return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log(fibonacci(4)); // 3

// fibonacci(3) + fibonacci(2)
// fibonacci(2)+fib(1)+fibonacci(2) 
// return 1 + 1 + 1 = 3

console.log(fibonacci(5)); // 5
// fib(4) + fib(3)
// fib(3) + fib(2) + fib(2) + fib(1)
// fib(2)+fib(1) + fib(2) + fib(2) + fib(1)

// return 1 + 1 + 1 + 1 + 1 = 5


  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
  
/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(arr) {
  let result = [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      // console.log(...[2,3]) // 2,3
      result.push(...flatten(ele))
    } else {
      result.push(ele)
    }
  }) 
  return result
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

// [1].push(...flatten([2,[3]])
// [2].push(...flatten([[3]])
// [3]
// break
// [2].push...[3] => [2,3]
// [1].push...[2,3] => [1,2,3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}

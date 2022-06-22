/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(arr) {
  if (!arr.length) return [ [] ];

  let firstEle = arr[0];
  let withOutFirst = arr.slice(1)
  let twoDwithoutFirst = permutations(withOutFirst)

  let permutation = []
  
  twoDwithoutFirst.forEach(subArr => {
    for (let i = 0; i < subArr.length + 1; i ++) {
      permutation.push([...subArr.slice(0,i), firstEle, ...subArr.slice(i)])
    }
  } )

  return permutation
}
// const permutations = (array) => {
//   // return a 2D array
//   if (array.length <= 1) return [array];
//   // take the 1st element from the array
//   let first = array.shift();

//   let perms = permutations(array);
// // first = 1
// // perms = permutations([2,3])  // [[3,2]]
// //            |
//   //        first = 2
//   // perms = permutations([3]) 
// //                |
//   //          break, return array [ [3] ]

//   // console.log('this is perms', perms)

//   let allPerms = [];

//   for (let i = 0; i < perms.length; i++) {
//     subPerm = perms[i];
//     // subPerm = [3]
//     for (let j = 0; j <= subPerm.length; j++) {
//       let left = subPerm.slice(0, j); // [3]
//       let mid = [first]; // [1]
//       let right = subPerm.slice(j); // [2]

//       allPerms.push(left.concat(mid).concat(right)); [[3,2]]
//     }
//   }

//   return allPerms;
// };

console.log(permutations([1, 2, 3]))
// [ [1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1],
// [3, 1, 2], [3, 2, 1] ])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}

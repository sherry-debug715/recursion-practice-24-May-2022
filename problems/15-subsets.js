/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets = (arr) => {
  if (!arr.length) return [[]];

  const last = arr[arr.length - 1];
  const subs = subsets(arr.slice(0, arr.length - 1));
  console.log('this is subs', subs)

  return subs.concat(subs.map((el) => {
    let newArr = el.slice(0)
    console.log('this is newArr', newArr)
    newArr.push(last);
    return newArr;
  }));
}

subsets([1, 2, 3]) 
// function subsets1(arr) {
//   //establish base case. If I pass in an empty array, the only subset is that 
//   //empty array itself
//   if (!arr.length) return [[]]

//   //take out the last element of the array, so that we can add it in to our
//   //subsets that we get back from our recursive call
//   const last = arr.pop()
//   debugger
//   //recursive call, after popping off last element in the array send what's left
//   //back through function to continue breaking it down
//   const subs = subsets(arr)
//   debugger
//   //create mapped array where each subset that came back has my the value stored
//   //in my last variable pushed into it
//   const mapped = subs.map(e => {
//     //reassign e to be a shallow copy of itself. but why? If we start pushing
//     //things into e, since it's a reference data type, we're going to mutate the
//     //values living in our subs array. Creating a shallow copy gives us a new
//     //array to push into without mutating our original
//     e = e.slice()
//     //push last into e
//     e.push(last)
//     //return e to new mapped array
//     return e
//   })
//   debugger
//   //reassign subs to be itself with concatenated with our mapped array
//   subs = subs.concat(mapped)
//   debugger

//   //return subs to where our function was called
//   return subs
// }

// function subsets(arr){
//   let res = [];

//   let subset = [];

//   function find_subSets(i){
//     if (i >= arr.length) {
//       res.push(subset.slice())
//       return
//     }

//     subset.push(arr[i])
//     find_subSets(i+1)
    
//     subset.pop();
//     find_subSets(i+1);
//   }
//   find_subSets(0);
//   return res
// }

console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2]]
// find_subSets(0)
// subset.push(arr[0]) -> [1]
// find_subSets(1)
// subset.push(arr[1]) -> [1,2]
// find_subSets(2)
// subset.push(arr[2]) -> res.push(subset copy) => [[1,2]]
// find_subSets(0)






/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}

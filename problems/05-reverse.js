/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
function reverse(str) {
  let strArr = str.split('')
  if (!strArr.length) return '';
  let lastIndex = strArr.length - 1
  return strArr[lastIndex]  += reverse(strArr.slice(0,lastIndex).join('')) 

}

console.log(reverse("house")); // "esuoh"
// e += reverse('hous')
// s += reverse('hou')
// u += reverse('ho')
// o += reverse('h')
// h += null return
// h
// oh
// uoh
// suoh
// esuoh
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

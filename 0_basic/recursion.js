/*
recursion到處都在用 Json.stringify(), Json.parse()
*/

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([1,2,3,4.5]))

function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("abcde"));

function capitalizeFirst(array) {
  if (array.length === 0) {
    return [];
  }

  let newArr = [array[0][0].toUpperCase() + array[0].slice(1)];
  return newArr.concat(capitalizeFirst(array.slice(1)));
}
let a = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// console.log(a)

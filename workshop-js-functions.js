// -----------------------------------------------------------------------------------------------------------
// ** Are the Numbers Equal?
// -----------------------------------------------------------------------------------------------------------
// function isSameNum(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isSameNum(4, 8));

// -----------------------------------------------------------------------------------------------------------
// ** Absolute Sum
// -----------------------------------------------------------------------------------------------------------
// function getAbsSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + Math.abs(arr[i]);
//   }
//   return sum;
// }
// console.log(getAbsSum([2, -1, 4, -8, 10]));

// -----------------------------------------------------------------------------------------------------------
// ** How Much is True?
// -----------------------------------------------------------------------------------------------------------
// function countTrue(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) count++;
//   }
//   return count;
// }
// console.log(countTrue([true, false, false, true, false]));

// -----------------------------------------------------------------------------------------------------------
// ** Find the Smallest and Biggest Numbers 10pts
// -----------------------------------------------------------------------------------------------------------
// function minMax(arr) {
//   var max = arr[0];
//   var min = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     var temp = arr[i];
//     if (temp > max) {
//       max = arr[i];
//     }
//     if (temp < min) {
//       min = arr[i];
//     }
//   }
//   return [min, max];
// }
// console.log(minMax([2, 4, 9, 2, 0, 16, 24]));

// -----------------------------------------------------------------------------------------------------------
// ** Get Sum of People's Budget
// -----------------------------------------------------------------------------------------------------------
// function getBudgets(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i].budget;
//   }
//   return sum;
// }
// console.log(
//   getBudgets([
//     { name: "John", age: 21, budget: 25000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 },
//   ])
// );
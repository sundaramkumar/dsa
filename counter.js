/**
 * Counter
 *
 * https://leetcode.com/problems/counter/description/
 *
 * Given an integer n, return a counter function.
 * This counter function initially returns n and then returns 1 more than
 * the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */
/**
 *
 * @param {*} n
 * @returns
 */
const createCounter = (n) => {
  let count = n;
  return function () {
    return count++;
  };
};

let counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

/**
 * Other ways of doing
 */
// const createCounter = n => () => n++;

// var createCounter = function (n) {
//   return () => {
//     return n++;
//   };
// };

// var createCounter = function (n) {
//   return () => n++;
// };

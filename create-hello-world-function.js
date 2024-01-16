/**
 * Create Hello World Function
 *
 * https://leetcode.com/problems/create-hello-world-function/description/
 *
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

/**
 * @return {Function}
 */
var createHelloWorld = function (input) {
  let args = input;
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f([])); // "Hello World"
console.log(f([{}, null, 42])); // "Hello World"

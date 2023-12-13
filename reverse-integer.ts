/**
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

function reverse(x: number): number {
  const sign = x < 0 ? "-" : "";
  let revnumber = Math.abs(x).toString().split("").reverse().join("");
  return Number(sign + revnumber);
}

reverse(123);
reverse(-123);
reverse(120);

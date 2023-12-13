/**
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

function reverse(x: number): number {
  const INT_MAX = Math.pow(2, 31) - 1; // maximum 32-bit signed integer value
  const INT_MIN = -Math.pow(2, 31); // minimum 32-bit signed integer value
  const sign = x < 0 ? "-" : "";
  let revnumber = Math.abs(x).toString().split("").reverse().join("");
  const reversed = Number(sign + revnumber);
  if (reversed > INT_MAX || reversed < INT_MIN) {
    return 0;
  }

  return reversed;
}

reverse(123);
reverse(-123);
reverse(120);
reverse(1534236469);

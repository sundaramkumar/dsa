/***
 * Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.

 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 * Constraints:
 * -231 <= x <= 231 - 1
 */

function isPalindrome(x: number): boolean {
  if (x < 0 || isNaN(x)) return false;

  const INT_MAX = Math.pow(2, 31) - 1; // maximum 32-bit signed integer value
  const INT_MIN = -Math.pow(2, 31); // minimum 32-bit signed integer value
  let revnumber = Math.abs(x).toString().split("").reverse().join("");

  const reversed = Number(revnumber);

  if (reversed > INT_MAX || reversed < INT_MIN) {
    return false;
  }

  return reversed == x;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

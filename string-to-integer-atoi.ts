/**
 * String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * The algorithm for myAtoi(string s) is as follows:
 *
 * Read in and ignore any leading whitespace.
 * Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
 * Return the integer as the final result.
 * Note:
 *
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 */

const pattern = /^\+-/gm;

function myAtoi(s: string): number {
  if (s == "" || s == "-" || s == "+") {
    return 0;
  }

  if (pattern.test(s)) {
    return 0;
  }
  const INT_MAX = Math.pow(2, 31) - 1; // maximum 32-bit signed integer value
  const INT_MIN = -Math.pow(2, 31); // minimum 32-bit signed integer value

  let error = false;

  const myString = s.replace(/^\s+/, "").replace(/^\+/, "").split("");

  const temp = [];
  let sign = myString[0] == "-" ? "-" : "";

  for (let i = 0; i < myString.length; i++) {
    if ((sign == "-" || sign == "+") && i == 0) {
      continue;
    }

    if (!isInt(myString[i])) {
      error = true;
      break;
    } else {
      temp.push(myString[i]);
    }
  }
  if (temp.length == 0) return 0;

  const atoi = parseInt(sign + temp.join(""), 10);

  let myInteger = 0;
  if (atoi > INT_MAX) {
    myInteger = INT_MAX;
  } else if (atoi < INT_MIN) {
    myInteger = INT_MIN;
  } else {
    myInteger = atoi;
  }
  return !temp.length && error ? 0 : myInteger;
}

function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

console.log("myAtoi is ", myAtoi(" +-"));
console.log("myAtoi is ", myAtoi("+-1"));
console.log("myAtoi is ", myAtoi("+1"));
console.log("myAtoi is ", myAtoi("42"));
console.log("myAtoi is ", myAtoi("-42"));
console.log("myAtoi is ", myAtoi("4193 with words"));
console.log("myAtoi is ", myAtoi("words and 987"));
/**
 * Example 1:
 *
 * Input: s = "42"
 * Output: 42
 * Explanation: The underlined characters are what is read in, the caret is the current reader position.
 * Step 1: "42" (no characters read because there is no leading whitespace)
 *          ^
 * Step 2: "42" (no characters read because there is neither a '-' nor '+')
 *          ^
 * Step 3: "42" ("42" is read in)
 *            ^
 * The parsed integer is 42.
 * Since 42 is in the range [-231, 231 - 1], the final result is 42.
 * Example 2:
 *
 * Input: s = "   -42"
 * Output: -42
 * Explanation:
 * Step 1: "   -42" (leading whitespace is read and ignored)
 *             ^
 * Step 2: "   -42" ('-' is read, so the result should be negative)
 *              ^
 * Step 3: "   -42" ("42" is read in)
 *                ^
 * The parsed integer is -42.
 * Since -42 is in the range [-231, 231 - 1], the final result is -42.
 * Example 3:
 *
 * Input: s = "4193 with words"
 * Output: 4193
 * Explanation:
 * Step 1: "4193 with words" (no characters read because there is no leading whitespace)
 *          ^
 * Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
 *          ^
 * Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
 *              ^
 * The parsed integer is 4193.
 * Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
 *
 **/

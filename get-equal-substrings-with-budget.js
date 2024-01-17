/**
 * Get Equal Substrings Within Budget
 *
 * https://leetcode.com/problems/get-equal-substrings-within-budget/description/
 *
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let left = 0;
  let cost = 0;
  let right = 0;
  for (right = 0; right < s.length; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    if (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
  }
  console.log(right - left);
  return right - left;
};
(s = "abcd"), (t = "bcdf"), (maxCost = 3);
equalSubstring(s, t, maxCost);
(s = "abcd"), (t = "cdef"), (maxCost = 3);
equalSubstring(s, t, maxCost);
(s = "abcd"), (t = "acde"), (maxCost = 0);
equalSubstring(s, t, maxCost);

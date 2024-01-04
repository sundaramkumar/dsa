/**
 * String Transformation
 *
 * https://leetcode.com/problems/string-transformation/description/
 *
 * You are given two strings s and t of equal length n. You can perform the following operation on the string s:
 *
 * Remove a suffix of s of length l where 0 < l < n and append it at the start of s.
 * For example, let s = 'abcd' then in one operation you can remove the suffix 'cd' and append it in front of s making s = 'cdab'.
 * You are also given an integer k. Return the number of ways in which s can be transformed into t in exactly k operations.
 *
 * Since the answer can be large, return it modulo 109 + 7.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abcd", t = "cdab", k = 2
 * Output: 2
 * Explanation:
 * First way:
 * In first operation, choose suffix from index = 3, so resulting s = "dabc".
 * In second operation, choose suffix from index = 3, so resulting s = "cdab".
 *
 * Second way:
 * In first operation, choose suffix from index = 1, so resulting s = "bcda".
 * In second operation, choose suffix from index = 1, so resulting s = "cdab".
 * Example 2:
 *
 * Input: s = "ababab", t = "ababab", k = 1
 * Output: 2
 * Explanation:
 * First way:
 * Choose suffix from index = 2, so resulting s = "ababab".
 *
 * Second way:
 * Choose suffix from index = 4, so resulting s = "ababab".
 */
/**
 * @param {string} str
 * @param {string} target
 * @param {number} ops Number of Operations
 * @returns {number}
 */
function numberOfWays(str, target, ops) {
  let ss = str + str;
  if (!ss.includes(target)) {
    return 0;
  }
  let mod = 10 ** 9 + 7;
  let strLen = str.length;
  let f0 = Number(str === target);
  let r = Math.floor(strLen / ss.indexOf(str, 1));
  let f1 = r - f0;
  let left = ops % 2 === 0 ? f0 : f1;
  let a1 = ops % 2 === 0 ? (strLen - 2) * r : (strLen - 2) * (strLen - 1) * r;
  let q = (strLen - 1) ** 2;
  let ans;
  if (q === 1) {
    ans = (a1 * Math.floor(ops / 2) + left) % mod;
  } else {
    ans = (a1 * (Math.pow(q, Math.floor(ops / 2)) - 1)) / (q - 1) + left;
  }
  return ans % mod;
}

console.log(numberOfWays((str = "abcd"), (target = "cdab"), (ops = 2)));
console.log(numberOfWays((str = "ababab"), (target = "ababab"), (ops = 1)));

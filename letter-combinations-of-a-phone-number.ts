/**
 * Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Given a string containing digits from 2-9 inclusive, return all possible letter
 * combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 * Example 1:
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * Example 2:
 *
 * Input: digits = ""
 * Output: []
 * Example 3:
 *
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 */
function letterCombinations(digits: string): string[] {
  const phoneNumberMap = new Map([
    [2, ["a", "b", "c"]],
    [3, ["d", "e", "f"]],
    [4, ["g", "h", "i"]],
    [5, ["j", "k", "l"]],
    [6, ["m", "n", "o"]],
    [7, ["p", "q", "r", "s"]],
    [8, ["t", "u", "v"]],
    [9, ["w", "x", "y", "z"]],
  ]);
  const numbers = digits.split("");
  const alphabets = [];
  numbers.forEach((number) => {
    alphabets.push(phoneNumberMap.get(parseInt(number, 10)));
  });

  // const combos = alphabets[0].flatMap((d) => alphabets[1].map((v) => d + v));
  const combos = alphabets.reduce(
    (a, b) => a.flatMap((x) => b.map((y) => x + y)),
    [""]
  );
  if (combos.length === 1 && combos[0] == "") {
    combos.length = 0;
  }
  return combos;
}

const combos = letterCombinations("23");
console.log("combos", combos);

const combos1 = letterCombinations("");
console.log("combos", combos1);

const combos2 = letterCombinations("2");
console.log("combos", combos2);

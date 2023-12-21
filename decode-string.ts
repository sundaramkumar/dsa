/**
 * decode-string
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid;
 * there are no extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and
 * that digits are only for those repeat numbers, k.
 * For example, there will not be input like 3a or 2[4].
 * The test cases are generated so that the length of the output will never exceed 105.
 */

function decodeString(s: string): string {
  const stack: [number, string][] = [];
  let currentString = "";
  let currentMultiplier = 0;

  for (let char of s) {
    if (!isNaN(Number(char))) {
      currentMultiplier = currentMultiplier * 10 + +char;
    } else if (char === "[") {
      stack.push([currentMultiplier, currentString]);
      currentString = ""; // reset
      currentMultiplier = 0; // reset
    } else if (char === "]") {
      const [prevMultiplier, prevString] = stack.pop();
      currentString = prevString + currentString.repeat(prevMultiplier); // repeat the chars by number of times.
    } else {
      currentString += char;
    }
  }

  return currentString;
}

let str = "100[leetcode]";
console.log(decodeString(str));

str = "3[ab]2[cd]";
console.log(decodeString(str));

str = "3[a2[c]d]2[b2[c]]";
console.log(decodeString(str));

str = "3[a2[c]]";
console.log(decodeString(str));

str = "2[abc]3[cd]ef";
console.log(decodeString(str));

/**
 * Found another way with Regex.
 * Ref: https://leetcode.com/problems/decode-string/solutions/3816611/easy-2-step-regex-solution-t-o-n-s-o-1/?source=submission-ac
 */

function decodeStringWithRegex(s: string): string {
  const pattern = /(\d+)\[([a-z]+)\]/im; // initially I was doing a small mistake in the regex
  // I was using /(\d)\[([a-z])\]/im , so not able to repeat and failed.
  let match = s.match(pattern);
  while (match) {
    s = s.replace(pattern, match[2].repeat(parseInt(match[1])));
    match = s.match(pattern);
  }
  return s;
}

str = "100[leetcode]";
console.log(decodeStringWithRegex(str));

str = "3[ab]2[cd]";
console.log(decodeStringWithRegex(str));

str = "3[a2[c]d]2[b2[c]]";
console.log(decodeStringWithRegex(str));

str = "3[a2[c]]";
console.log(decodeStringWithRegex(str));

str = "2[abc]3[cd]ef";
console.log(decodeStringWithRegex(str));

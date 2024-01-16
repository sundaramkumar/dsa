/**
 * Minimum Suffix Flips
 * https://leetcode.com/problems/minimum-suffix-flips/description/
 *
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let flips = 0;
  let flipNumber = "0";
  for (let i = 0; i < target.length; i++) {
    let chr = target.charAt(i); // get current char
    //If current chr is not eq to the flipNumber, then
    if (flipNumber !== chr) {
      flipNumber = flipNumber === "0" ? "1" : "0";
      flips++; // increase the flip count
    }
  }
  return flips;
};

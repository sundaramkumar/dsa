/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/description/
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 */
function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const next = i + 1;

      if (nums[j] == target - nums[i]) {
        result.push(i, j);
      }
    }
  }

  return result;
}

// console.log("twosum", tsum);
// const tsum = twoSum1([3, 2, 3], 6); // [ 0, 2 ]
const tsum = twoSum([2, 7, 11, 15], 9);
console.log("tsum", tsum); // outputs [ 0, 1 ]

/**
 * This is working, but the testcases in Leetcode will not pass
 * For coding interview this is ok
 */
function twoSum1(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const next = i + 1;
    console.log(i, next);
    console.log(nums[i], nums[next]);
    if (target == nums[i] + nums[next]) {
      result.push(i);
      result.push(next);
    }
  }

  return result;
}

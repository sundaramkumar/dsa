/**
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * Consider the number of unique elements of nums to be k, to get accepted,
 * you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the unique elements in the order
 * they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 *
 * The Steps to do.
 * Create a unique set of the array.
 * Delete the existing array.
 * Add unique items to existing array.
 */

/**
 * solving with JavaScript Set
 *
 */
function removeDuplicates(nums: number[]): number {
  let temp = [...new Set(nums)]; // JavaScript Set is a collection of unique values, so it will remove all the duplicates
  nums.length = 0; // delete/remove elements from the nums array
  nums.push(...temp); // add only uniques items to nums array
  console.log("temp", temp);
  return nums.length;
}

/**
 * solving without set and using inbuilt methods
 */
function removeDuplicatesNew(nums: number[]): number {
  const final: number[] = [];
  const sorted = nums.sort((a, b) => a - b);
  console.log("sorted: ", sorted);
  sorted.forEach((num) => {
    if (!final.includes(num)) {
      final.push(num);
    }
  });
  nums.length = 0;
  console.log("final:", final);
  nums.push(...final);
  return final.length;
}
const nums = [-3, -1, 0, 0, 0, 3, 3];
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [1,1,2]
const finalArray = removeDuplicatesNew(nums);
console.log("finalArray", finalArray);

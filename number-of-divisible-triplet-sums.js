/**
 *
 * Number of Divisible Triplet Sums
 *
 * https://leetcode.com/problems/number-of-divisible-triplet-sums/description/
 *
 * @param {*} nums
 * @param {*} d
 * @returns
 */
var divisibleTripletCount = function (nums, d) {
  let triplets = 0;
  let n = nums.length;
  let total = new Map();
  for (let i = 0; i < n; i++) {
    let t = (d - (nums[i] % d)) % d;
    triplets += total.get(t) || 0;
    for (let j = 0; j < i; j++) {
      let key = (nums[i] + nums[j]) % d;
      total.set(key, (total.get(key) || 0) + 1);
    }
  }
  console.log(triplets);
  return triplets;
};
/**
 * Another way of doing. But Leetcode throws error as time exceeded
 * this is more easy and understandable.
 *
var divisibleTripletCount = function (nums, d) {
  let triplets = 0;
  const n = nums.length;

  // Loop through the array, but ensure that there are at least 2 elements after the current index
  for (let i = 0; i < n - 2; i++) {
    // Start from the next element after i
    for (let j = i + 1; j < n - 1; j++) {
      // Start from the next element after j
      for (let k = j + 1; k < n; k++) {
        // Check if the sum of elements at indices i, j, and k is divisible by d
        if ((nums[i] + nums[j] + nums[k]) % d === 0) {
          triplets++; // Increment the count of valid triplets
        }
      }
    }
  }
};
*/
divisibleTripletCount((nums = [3, 3, 4, 7, 8]), (d = 5));
divisibleTripletCount((nums = [3, 3, 3, 3]), (d = 3));
divisibleTripletCount((nums = [3, 3, 3, 3]), (d = 6));

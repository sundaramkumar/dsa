/**
 * Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * We can simply use splice and sort method
 *
 */
function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort();
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);

/**
 * Another way of doing this using loops
 */
function mergeNew(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1; // nums1's index (the actual nums) 2
  let j = n - 1; // nums2's index 2
  let k = m + n - 1; // nums1's index (the next filled position) 5

  while (j >= 0)
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  console.log(nums1);
}
mergeNew([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
mergeNew([1], 1, [], 0);
mergeNew([0], 0, [1], 1);

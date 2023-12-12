function twoSum(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var next = i + 1;
            if (nums[j] == target - nums[i]) {
                result.push(i, j);
            }
        }
    }
    return result;
}
// console.log("twosum", tsum);
// const tsum = twoSum1([3, 2, 3], 6);
var tsum = twoSum([2, 7, 11, 15], 9);
console.log("tsum", tsum);
/**
 * This is working, but the testcases in Leetcode will not pass
 */
function twoSum1(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var next = i + 1;
        console.log(i, next);
        console.log(nums[i], nums[next]);
        if (target == nums[i] + nums[next]) {
            result.push(i);
            result.push(next);
        }
    }
    return result;
}

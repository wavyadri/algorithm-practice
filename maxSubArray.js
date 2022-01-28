// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// divide and conquer

const maxSubArray = (nums) => {
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]));
// output: 6

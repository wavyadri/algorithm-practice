// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

function maxSubArr(nums: number[]): number {
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      // if the prev sum is less, the new start is set to curr value
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }

  return max;
}

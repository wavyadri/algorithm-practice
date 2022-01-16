// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
  let max = nums[0];
  let current = Math.max(max, 0);

  for (let i = 1; i < nums.length; i++) {
    current += nums[i]; // this checks if the next pair able to beat the running max?
    max = Math.max(max, current);
    current = Math.max(current, 0);
    console.log(max, current);
  }

  return max;
};

console.log(maxSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index

function pivotIndex(nums: number[]): number {
  let right = 0;
  let left = 0;

  // sum of array
  nums.forEach((n) => (right += n));

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];

    if (left === right) {
      return i;
    }
    left += nums[i];
  }

  return -1;
}

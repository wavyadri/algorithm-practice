// 136. Single Number
// https://leetcode.com/problems/single-number/
// Time: O(n)
// Space: O(n)

function singleNumberTS(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  // we need to keep track of what we've seem
  let hash: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (const key in hash) {
    if (hash[key] === 1) {
      let num = Number(key);
      return num;
    }
  }

  return NaN;
}

// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const obj = {};

  for (let i: number = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = [i];
    } else {
      let last: number = obj[nums[i]].pop();
      if (i - last <= k) {
        return true;
      } else {
        obj[nums[i]].push(i);
      }
    }
  }

  return false;
}

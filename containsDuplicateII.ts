// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/
// T: O(n)
// S: O(n)

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

function containsNearbyDuplicateV2(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) return true;
    }

    // instead of keeping an array of all values,
    // always replace with curr value to keep track of latest i
    map.set(nums[i], i);
  }

  return false;
}

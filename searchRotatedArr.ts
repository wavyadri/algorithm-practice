// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// You must write an algorithm with O(log n) runtime complexity.
// binary search

// TC: O(n) linear
function search(nums: number[], target: number): number {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

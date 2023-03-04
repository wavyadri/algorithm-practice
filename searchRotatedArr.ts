// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// You must write an algorithm with O(log n) runtime complexity.
// binary search

// TC: O(n) linear
function search0(nums: number[], target: number): number {
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

function search1(nums: number[], target: number): number {
  // early return
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  }

  // binary search
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // early return
    if (nums[mid] === target) {
      return mid;
    }

    // determine which side is sorted
    if (nums[left] <= nums[mid]) {
      // left-mid sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // mid-right sorted
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

// Input: nums = [4,5,6,7,8,0,1,2], target = 0

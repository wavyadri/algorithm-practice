// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 10 Common Coding Interview Problems - Solved!
// binary search
// Time O(logn)
// Space O(1)

const firstAndLast = (nums, target) => {
  if (nums.length === 0) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  // find left bound
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] !== target) return [-1, -1];

  // save start value of target
  const start = left;

  // reset
  left = 0;
  right = nums.length - 1;

  // find right bound
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, right];
};

console.log(firstAndLast([5, 7, 7, 8, 8, 9, 10], 8));

// review normal binary search
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return target;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

// console.log(binarySearch([5, 7, 7, 8, 8, 9, 10], 7));

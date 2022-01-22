// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// two pointer
// Time: O(n)
// Space: O(1)

const removeDups = (nums) => {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      nums[i - count] = nums[i];
    }
  }
  return nums.length - count;
};

console.log(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 27. Remove Element
// https://leetcode.com/problems/remove-element/
// two pointer

const removeElement = (nums, val) => {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  // slow moves for every non-val ele so we can trust it will be the length of the arr without val
  return slow;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

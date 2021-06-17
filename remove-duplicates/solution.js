// leet code
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

var removeDuplicates = function (nums) {
  let lastSeen = null;
  let secondIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    // if current num is not equal to prev num
    if (nums[i] != lastSeen) {
        // move the num to next in array
      nums[secondIndex] = nums[i];
      // move pointer
      secondIndex++;
    }
    // set new reference
    lastSeen = nums[i];
  }
  // remove everything after aka the duplicates
  nums.splice(secondIndex);
  return secondIndex;
};

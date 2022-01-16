// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// two pointer

const removeDups = (nums) => {
  var p1 = 0; //pointer1

  for (let p2 = 0; p2 < nums.length; p2++) {
    //pointer2
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    console.log(nums, p1, p2, '****');
  }

  return nums;
};

console.log(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

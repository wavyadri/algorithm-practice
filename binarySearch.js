//  704. Binary Search
const search = (nums, target) => {
  let first, last;
  first = 0;
  last = nums.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] < target) {
      first = mid + 1;
    } else if (nums[mid] > target) {
      last = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));

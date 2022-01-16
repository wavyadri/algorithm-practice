// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// hash

const twoSum = (nums, target) => {
  let compliments = {};
  for (let i = 0; i < nums.length; i++) {
    if (compliments[target - nums[i]] !== undefined) {
      return [compliments[target - nums[i]], i];
    } else {
      compliments[nums[i]] = i;
    }
  }
  return [];
};

// const twoSum = (nums, target) => {
//   let addNum = {};

//   for (let i = 0; i < nums.length; i++) {
//     let difference = Math.abs(target - nums[i]);
//     console.log(difference);
//     if (difference in addNum) {
//       return [i, addNum[difference]];
//     } else {
//       addNum[nums[i]] = i;
//     }
//   }
//   return [];
// };

// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array

function runningSum(nums: number[]): number[] {
  let sumArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sumArray.push(nums[i]);
    } else {
      let nextNum = nums[i] + sumArray[i - 1];
      sumArray.push(nextNum);
    }
  }

  return sumArray;
}

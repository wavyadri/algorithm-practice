// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array

function runningSum(nums: number[]): number[] {
  let sumArray: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
      let nextNum = nums[i] + sumArray[i - 1];
      sumArray.push(nextNum);
  }

  return sumArray;
}

// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(nums[i], 0);
      i--;
      nums.push(0);
    }
  }
}

// 228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/

function summaryRanges(nums: number[]): string[] {
  let start,
    end = '';
  let result: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] === 1) {
      } else {
        result.push(String(nums[i]));
      }
    }
  }
  return [''];
}

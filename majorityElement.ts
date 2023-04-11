// 169. Majority Element
// https://leetcode.com/problems/majority-element/?envType=study-plan&id=data-structure-ii

function majorityElement(nums: number[]): number {
  const majorityEle = Math.floor(nums.length / 2);

  // keep track of frequency
  let frequency: Record<number, number> = {};

  for (const num of nums) {
    if (frequency[num] === undefined) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }
  }

  for (const key in frequency) {
    if (frequency[key] > majorityEle) {
      return Number(key);
    }
  }

  return NaN;
}

// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate

// v1
function containsDuplicate(nums: number[]): boolean {
  let tally: number[] = [];
  for (const num of nums) {
    if (tally.includes(num)) {
      return true;
    }
    tally.push(num);
  }

  return false;
}

// v2
function containsDuplicateV2(nums: number[]): boolean {
  const uniqueSet = new Set(nums);
  if (uniqueSet.size !== nums.length) {
    return true;
  }
  return false;
}

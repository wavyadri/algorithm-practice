// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// hash
// Time: O(n+m)

function intersectII(nums1: number[], nums2: number[]): number[] {
  let obj = {};
  let result: number[] = [];

  for (const num of nums1) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  for (const num of nums2) {
    if (obj[num]) {
      result.push(num);
      obj[num]--;
    }
  }

  return result;
}

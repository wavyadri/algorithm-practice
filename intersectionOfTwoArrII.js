// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// hash
// Time: O(n+m)

const intersect = (nums1, nums2) => {
  // let hash = {};
  // let result = [];
  // for (const num of nums1) {
  //   if (num in hash) {
  //     hash[num]++;
  //   } else {
  //     hash[num] = 1;
  //   }
  // }
  // for (const num of nums2) {
  //   if (num in hash && hash[num] > 0) {
  //     result.push(num);
  //     hash[num]--;
  //   }
  // }
  // return result;

  let map = new Map();
  let result = [];

  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// [4,5,9]
// [4,4,8,9,9]

// 136. Single Number
// https://leetcode.com/problems/single-number/
// Time: O(n)
// Space: O(n)

const singleNumber = (nums) => {
  let count = {};

  for (const num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (const key in count) {
    if (count[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

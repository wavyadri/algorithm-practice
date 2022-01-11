// 169. Majority Element
// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  let tally = {};
  let leader = null;
  for (const num of nums) {
    if (tally[num]) {
      tally[num]++;
      leader = num;
    } else {
      tally[num] = 1;
    }
  }

  if (tally[leader] > arr.length / 2) {
    return leader;
  }

  return null;
};

console.log(majorityElement([3, 2, 3]));

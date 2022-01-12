// 169. Majority Element
// https://leetcode.com/problems/majority-element/

const majorityElement = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  let tally = {};
  let leader = 0;
  let highestScore = 0;
  for (const num of arr) {
    if (tally[num]) {
      tally[num]++;

      if (tally[num] > highestScore) {
        leader = num;
        highestScore = tally[num];
      }
    } else {
      tally[num] = 1;
    }
    if (tally[leader] > arr.length / 2) {
      return leader;
    }
  }

  // if (tally[leader] > arr.length / 2) {
  //   return leader;
  // }

  return null;
};

console.log(majorityElement([6, 6, 6, 7, 7]));

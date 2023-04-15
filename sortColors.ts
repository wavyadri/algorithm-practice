// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/description/?envType=study-plan&id=data-structure-ii
// inserting into array with splice
// dutch flag problem

function sortColors(nums: number[]): void {
  if (nums.length === 1) return;

  let index0 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // remove from arr
      // we don't need to store the value since we know what number it is
      nums.splice(i, 1);
      // move item to start
      nums.unshift(0);
      // increase index
      index0++;
    } else if (nums[i] === 1) {
      // remove from arr
      nums.splice(i, 1);
      // insert into arr after last 0
      // splice(startingIdx, delete count, item)
      nums.splice(index0, 0, 1);
    }

    // we don't need a case for 2 because it will end up
    // pushed to the end as the 0s and 1s move forward
  }
}

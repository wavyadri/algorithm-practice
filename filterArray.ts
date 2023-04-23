// 2634. Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let results: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      results.push(arr[i]);
    }
  }
  return results;
}

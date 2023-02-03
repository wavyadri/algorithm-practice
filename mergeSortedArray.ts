// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
// Time: O(n)
// Space: O(1)
// two pointers

function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  // largest num goes last
  let length1 = m - 1;
  let length2 = n - 1;
  let pointer = nums1.length - 1;

  while (length2 >= 0) {
    if (nums1[length1] > nums2[length2]) {
      nums1[pointer] = nums1[length1];
      pointer--;
      length1--;
    } else {
      nums1[pointer] = nums2[length2];
      pointer--;
      length2--;
    }
  }
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

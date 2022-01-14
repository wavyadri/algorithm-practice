// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
// Time: O(n)
// Space: O(1)

const mergeSort = (nums1, m, nums2, n) => {
  // two pointers
  let a = m - 1; // last index of nums1
  let b = n - 1; // last index of nums2
  let i = m + n - 1; // last index of the arr if they merged

  while (b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[i] = nums1[a];
      i--;
      a--;
    } else {
      nums1[i] = nums2[b];
      i--;
      b--;
    }
  }

  return nums1;
};

console.log(mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/
// binary search
// Time: O(logn)
// Space: O(1)

const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // binary search
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((right + left) / 2);

      if (isBadVersion(mid)) {
        right = mid; // check one before in case it was not the first bad
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};

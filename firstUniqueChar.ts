// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
// Time complexity : O(N)since we go through the string of length N two times.
// Space complexity : O(1) because English alphabet contains 26 letters.

function firstUniqeChar(s: string): number {
  let chars = {};
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) {
      chars[s[i]]++;
    } else {
      chars[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

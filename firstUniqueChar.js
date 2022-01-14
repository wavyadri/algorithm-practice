// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
// hash
// Time: O(n^2) ???
// Space: O(n) ???

const firstUniqChar = (s) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;

  // let m = new Map();
  // for (let i = 0; i < s.length; i++) {
  //   m.has(s[i]) ? m.set(s[i], -1) : m.set(s[i], i);
  // }
  // console.log(m);
  // for (let [key, value] of m) {
  //   if (value !== -1) return value;
  // }
  // return -1;
};

console.log(firstUniqChar('aabblpaca'));

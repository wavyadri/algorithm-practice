// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
// 10 Common Coding Interview Problems - Solved!

const isAnagram = (s, t) => {
  // let a = s.split('').sort();
  // let b = t.split('').sort();
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] !== b[i]) {
  //     return false;
  //   }
  // }
  // return true;

  if (s.length !== t.length) return false;
  let a = {};
  let b = {};
  let i = 0;
  while (i < s.length) {
    if (a[s[i]]) {
      a[s[i]]++;
    } else {
      a[s[i]] = 1;
    }

    if (b[t[i]]) {
      b[t[i]]++;
    } else {
      b[t[i]] = 1;
    }

    i++;
  }

  for (const key in a) {
    if (b[key] !== a[key]) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));

// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
};

console.log(isPalindrome('race a ecar'));

// 2108. Find First Palindromic String in the Array
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const firstPalindrom = (words) => {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) {
      return word;
    }
  }
  return '';
};

console.log(firstPalindrom(['abc', 'car', 'ada', 'racecar', 'cool']));

abcDefg;

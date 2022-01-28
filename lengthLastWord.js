// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = (s) => {
  let arr = s.trim().split(' ');
  let last = arr[arr.length - 1];

  return last.length;
};

console.log(lengthOfLastWord('Hello World'));

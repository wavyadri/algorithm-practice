// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
// two pointer

const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let needleIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[needleIndex]) {
      if (needleIndex === needle.length - 1) {
        return i - needleIndex;
      }
      needleIndex++;
    } else {
      i -= needleIndex; // go back from where we started checking for needle in case match starts from i + 1
      needleIndex = 0;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll'));

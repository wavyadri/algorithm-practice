// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

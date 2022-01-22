// 66. Plus One
// https://leetcode.com/problems/plus-one/

const plusOne = (digits) => {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  // if we reach here, we can expect to have [0,0,0...]
  // thus we need to add a leading 1
  digits.unshift(1);
  return digits;
};

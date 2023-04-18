// 66. Plus One
// https://leetcode.com/problems/plus-one/

function plusOneTS(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    }

    if (digits[i] === 10) {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
}

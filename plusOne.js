// 66. Plus One
// https://leetcode.com/problems/plus-one/

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
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

// failed attempt
// const addition = (digits) => {
//   let lastIndex = digits.length - 1;

//   if (digits[lastIndex] < 9) {
//     digits[lastIndex]++;
//     return digits;
//   }

//   if (lastIndex > 0) {
//     digits[lastIndex] = 0;
//     digits[lastIndex - 1]++;
//   }

//   for (let i = lastIndex - 1; i >= 0; i--) {
//     if (i === 0 && digits[i] === 10) {
//       digits[i] = 1;
//       digits.push(0);
//     } else if (digits[lastIndex - 1] === 10) {
//       digits[i] = 0;
//       digits[i - 1]++;
//     }
//   }
//   return digits;
// };

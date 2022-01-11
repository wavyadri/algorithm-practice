// 9. Palindrome Number

const palindromeNumber = (num) => {
  let str = num.toString().toLowerCase();
  let length = Math.floor(str.length / 2);

  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const isPalindrome = (x) => {
  return x === Number(x.toString().split('').reverse().join(''));
};

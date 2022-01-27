// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// string

const isValid = (s) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let history = [];

  for (const char of s) {
    // if opening bracket
    if (brackets[char]) {
      history.push(brackets[char]);
    } else {
      // if closing bracket
      if (history.pop() !== char) return false;
    }
  }

  return !history.length;
};

console.log(isValid('([{}])'));

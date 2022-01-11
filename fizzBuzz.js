// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

const fizzbuzz = (num) => {
  let answer = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push('FizzBuzz');
    } else if (i % 3 === 0) {
      answer.push('Fizz');
    } else if (i % 5 === 0) {
      answer.push('Buzz');
    } else {
      answer.push(i.toString());
    }
  }

  return answer;
};

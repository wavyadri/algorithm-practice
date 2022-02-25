// codility

function solution(A, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let hash = {};
  let count = 0;
  let income = A.reduce((a, b) => a + b, 0);
  let fee = 12;

  // create hash
  for (const day of D) {
    if (day in hash) {
      hash[day].push(A[count]);
      count++;
    } else {
      hash[day] = [A[count]];
      count++;
    }
  }

  // calculate fee
  for (const day in hash) {
    let dailySum = hash[day].reduce((a, b) => a + b, 0);
    if (hash[day].length >= 3 && dailySum >= 100) {
      fee -= 1;
    }
  }

  return income - fee * 5;
}

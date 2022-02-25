// codility
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // loop through arr, if % 4 = 0, sum + arr[i]

  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 4 === 0) {
      sum += A[i];
    }
  }
  return sum;
}

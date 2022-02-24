// codality demo
// Correctness 80%
// Performance 0%
// Task score 44%

// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // sort
  A.sort();

  // remove duplicates
  let set = new Set(A);

  // set min
  let min = 1;

  // loop through A
  // if A[i] is negative, min will always be 1
  // if A[i] is min, increase min by 1
  for (i in A) {
    if (A[i] > -1 && A[i] == min) {
      min++;
    }
  }

  return min;
}

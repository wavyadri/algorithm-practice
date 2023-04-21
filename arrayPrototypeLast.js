// 2619. Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

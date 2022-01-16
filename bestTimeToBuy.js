// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// time O(n)
// space O(1)

// we want the lowest starting point possible.
const maxProfit = (prices) => {
  let start = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < start) {
      start = prices[i];
    }

    if (prices[i] > start) {
      let tempMax = prices[i] - start;
      max = Math.max(max, tempMax);
    }
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

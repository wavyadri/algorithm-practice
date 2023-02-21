// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// time O(n)
// space O(1)

function maxProfitTS(prices: number[]): number {
  let max: number = 0;
  let start: number = prices[0];

  for (let i: number = 0; i < prices.length; i++) {
    // loss scenario
    if (prices[i] < start) {
      start = prices[i];
    }

    // gain scenario
    if (prices[i] > start) {
      let gain: number = prices[i] - start;
      max = Math.max(gain, max);
    }
  }
  return max;
}

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

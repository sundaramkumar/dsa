/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 */

function maxProfit(prices) {
  let i = 0; // Buy
  let j = 1; // Sell
  let maxprof = 0;
  for (j = 1; j < prices.length; j++) {
    if (prices[j] > prices[i]) {
      console.log(prices[j], prices[i]);
      let currentProfit = prices[j] - prices[i];
      maxprof = Math.max(maxprof, currentProfit);
    } else {
      i = j;
    }
  }

  console.log("maxProf", maxprof);
  return maxprof;
}

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
const prices = [2, 1, 4];
const maxProf = maxProfit(prices);
console.log("maxProfit", maxProf);

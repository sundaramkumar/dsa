/**
 * Cherry Pickup
 *
 * https://leetcode.com/problems/cherry-pickup/description/
 *
 * You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.
 *
 * 0 means the cell is empty, so you can pass through,
 * 1 means the cell contains a cherry that you can pick up and pass through, or
 * -1 means the cell contains a thorn that blocks your way.
 * Return the maximum number of cherries you can collect by following the rules below:
 *
 * Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
 * After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
 * When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
 * If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.
 *
 *   col1  col2   col3
 * +-----+------+------+
 * |     |   C  |   #  |   row 1
 * +-----+------+------+
 * |  C  |      |   #  |   row 2
 * +-----+------+------+
 * |  C  |   C  |   C  |   row 3
 * +-----+------+------+
 *
 *   C => cherry
 *   # => Thorn
 *
 * Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
 * Output: 5
 * Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
 * 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
 * Then, the player went left, up, up, left to return home, picking up one more cherry.
 * The total number of cherries picked up is 5, and this is the maximum possible.
 * Example 2:
 *
 * Input: grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
 * Output: 0
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
function cherryPickup(grid) {
  const n = grid.length;
  const m = grid[0].length;
  // Fill all the rows/cells with null first
  const memo = Array(n)
    .fill()
    .map(() =>
      Array(m)
        .fill()
        .map(() => Array(m).fill(null))
    );
  console.log(memo);

  // start with 0, 0, 0, 0
  answer = Math.max(0, dp(0, 0, 0, 0, grid, memo));
  console.log(answer);
  return answer;
}

function dp(r1, c1, r2, c2, grid, memo) {
  const n = grid.length;
  const m = grid[0].length;
  // If the max row, max col is reached
  // or the cur pos (row,cell) is having thorn (-1)
  if (
    r1 === n ||
    c1 === m ||
    r2 === n ||
    c2 === m ||
    grid[r1][c1] === -1 ||
    grid[r2][c2] === -1
  ) {
    return Number.MIN_SAFE_INTEGER;
  } else if (r1 === n - 1 && c1 === m - 1) {
    return grid[r1][c1];
  } else if (memo[r1][c1][r2] !== null) {
    return memo[r1][c1][r2];
  } else {
    let ans = grid[r1][c1];
    if (c1 !== c2) ans += grid[r2][c2];
    ans += Math.max(
      Math.max(
        dp(r1, c1 + 1, r2, c2 + 1, grid, memo),
        dp(r1 + 1, c1, r2, c2 + 1, grid, memo)
      ),
      Math.max(
        dp(r1, c1 + 1, r2 + 1, c2, grid, memo),
        dp(r1 + 1, c1, r2 + 1, c2, grid, memo)
      )
    );
    memo[r1][c1][r2] = ans;
    return ans;
  }
}

cherryPickup([
  [0, 1, -1],
  [1, 0, -1],
  [1, 1, 1],
]);
cherryPickup([
  [1, 1, -1],
  [1, -1, 1],
  [-1, 1, 1],
]);
/*
 * The code uses dynamic programming to solve the problem.
 * It creates a memoization table with dimensions n x m x m, where n is the number of rows
 * in the grid and m is the number of columns.
 * The dp function is called recursively, and for each call, it explores four possible directions:
 * right, down, diagonal right-down, and diagonal down-right. Each recursive call has a constant time complexity of O(1).
 * Since there are n x m x m possible states in the memoization table, the overall time complexity is O(n^3).
 *
 * Time complexity: O(n^3)
 *
 */

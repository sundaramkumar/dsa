/**
 * Design Snake game
 *
 * https://leetcode.com/problems/design-snake-game/description/
 *
 * Design a Snake game that is played on a device with screen size height x width. Play the game online if you are not familiar with the game.
 *
 * The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.
 *
 * You are given an array food where food[i] = (ri, ci) is the row and column position of a piece of food that the snake can eat. When a snake eats a piece of food, its length and the game's score both increase by 1.
 *
 * Each piece of food appears one by one on the screen, meaning the second piece of food will not appear until the snake eats the first piece of food.
 *
 * When a piece of food appears on the screen, it is guaranteed that it will not appear on a block occupied by the snake.
 *
 * The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).
 *
 * Implement the SnakeGame class:
 *
 * SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size height x width and the positions of the food.
 * int move(String direction) Returns the score of the game after applying one direction move by the snake. If the game is over, return -1.
 *
 *
 * Input
 * ["SnakeGame", "move", "move", "move", "move", "move", "move"]
 * [[3, 2, [[1, 2], [0, 1]]], ["R"], ["D"], ["R"], ["U"], ["L"], ["U"]]
 * Output
 * [null, 0, 0, 1, 1, 2, -1]
 *
 * Explanation
 * SnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
 * snakeGame.move("R"); // return 0
 * snakeGame.move("D"); // return 0
 * snakeGame.move("R"); // return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
 * snakeGame.move("U"); // return 1
 * snakeGame.move("L"); // return 2, snake eats the second food. No more food appears.
 * snakeGame.move("U"); // return -1, game over because snake collides with border
 *
 */
/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function (width, height, food) {
  this.height = height;
  this.width = width;
  this.food = food;
  this.currFood = this.food.shift(); // set the first food from the food array as the currentFood
  this.row = 0;
  this.col = 0;
  this.score = 0;
  this.set = new Set(); // set stores the keys in order
  this.set.add("0-0");
};
/**
 * @param {string} direction
 * @return {number}
 */
// The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.
// the starting position is 0,0 => row = 0, col = 0
SnakeGame.prototype.move = function (direction) {
  // based on the direction increment / decrement the row , col
  if (direction === "U") {
    this.row--;
  } else if (direction === "D") {
    this.row++;
  } else if (direction === "L") {
    this.col--;
  } else if (direction === "R") {
    this.col++;
  }
  // Out of bounds so end the game
  if (
    this.row < 0 ||
    this.col < 0 ||
    this.row >= this.height ||
    this.col >= this.width
  ) {
    return -1;
  }
  // grab a ref to the first item in the set
  let tail = this.set.keys().next().value;
  let head = `${this.row}-${this.col}`;
  // if we hit ourself, and it's not the tail, end the game
  if (this.set.has(head) && head !== tail) {
    return -1;
  }
  // if we're eating food now
  if (this.currFood[0] === this.row && this.currFood[1] === this.col) {
    // set the currentFood to the next food in the array
    if (this.food.length > 0) {
      this.currFood = this.food.shift();
    } else {
      this.currFood = [-1, -1];
    }
    this.score++;
  } else {
    // else remove the tail from the queue and set
    this.set.delete(tail);
  }
  // always add the current coordinates to the queue
  this.set.add(head);
  return this.score;
};

const snakeGame = new SnakeGame(3, 2, [
  [1, 2],
  [0, 1],
]);
/*
  col1  col2   col3
+-----+------+------+
|start|      |      |   <== row 1
+-----+------+------+
|     |      |      |   <== row 2
+-----+------+------+
*/
// the starting position is 0,0 => row = 0, col = 0
console.log(snakeGame.move("R")); // curpos is 0,1, so will return 0
console.log(snakeGame.move("D")); // curpos is 1,1, so will return 0
console.log(snakeGame.move("R")); // curpos is 1,2, so will return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
console.log(snakeGame.move("U")); // curpos is 0,2, so will return 1
console.log(snakeGame.move("L")); // curpos is 0,1, so will return 2, snake eats the second food. No more food appears.
console.log(snakeGame.move("U")); // curpos is -1,1, so will  (row -1 is out of the bounds, so return -1, game over because snake collides with border)

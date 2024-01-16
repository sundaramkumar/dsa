/**
 * Exclusive Time of Functions
 *
 * https://leetcode.com/problems/exclusive-time-of-functions/description/
 *
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let result = Array(n).fill(0);
  let stack = [];
  for (let log of logs) {
    let [id, flag, time] = log.split(":");
    if (flag === "start") {
      stack.push([+id, +time]);
    } else {
      let [tid, prevTime] = stack.pop();
      let val = +time - prevTime + 1;
      result[tid] += val;
      if (stack.length) {
        result[stack[stack.length - 1][0]] -= val;
      }
    }
  }
  console.log("result: ", result);
  return result;
};

let n = 2;
let logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
exclusiveTime(n, logs);
(n = 1),
  (logs = [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:start:6",
    "0:end:6",
    "0:end:7",
  ]);
exclusiveTime(n, logs);
(n = 2),
  (logs = [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6",
    "1:end:6",
    "0:end:7",
  ]);
exclusiveTime(n, logs);

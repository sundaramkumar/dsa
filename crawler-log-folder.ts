/**
 * Crawler Log Folder
 *
 * https://leetcode.com/problems/crawler-log-folder/description/
 * The Leetcode file system keeps a log each time some user performs a change folder operation.
 *
 * The operations are described below:
 *
 * "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
 * "./" : Remain in the same folder.
 * "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
 * You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
 *
 * The file system starts in the main folder, then the operations in logs are performed.
 *
 * Return the minimum number of operations needed to go back to the main folder after the change folder operations.
 *
 *
 * Example 1:
 *
 *
 *
 * Input: logs = ["d1/","d2/","../","d21/","./"]
 * Output: 2
 * Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
 * Example 2:
 *
 *
 *
 * Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
 * Output: 3
 * Example 3:
 *
 * Input: logs = ["d1/","../","../","../"]
 * Output: 0
 */

function minOperations(logs: string[]): number {
  let logCounter = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../" && logCounter === 0) {
      // already in main
      continue;
    } else if (logs[i] === "../") {
      // go back, so decrement by 1
      logCounter--;
    } else if (logs[i] === "./") {
      // same / current folder
      continue;
    } else {
      // increment by 1
      logCounter++;
    }
  }
  return logCounter;
}

/**
 *
 * another solution
 * If first char of log[i] is digit or charcter i.e(d2/, 1/) etc. Then increment count
 * if you face "../" decrement count.
 * if you face "../" decrement count and already the counter is zero(0), the leave it.
 * if you encounter "./" leave it
 *
 */
function minOperations1(logs: string[]): number {
  let logCounter = 0;
  logs.forEach((log) => {
    if (log[0].match(/[0-9a-z]/i)) {
      logCounter++;
    } else if (log == "../") {
      if (logCounter > 0) {
        // if not in main, then do. else you are already in main. so you can't go back
        logCounter--;
      }
    }
  });

  return logCounter;
}

let logs = ["d1/", "d2/", "../", "d21/", "./"];
console.log(minOperations(logs));
logs = ["d1/", "d2/", "./", "d3/", "../", "d31/"];
console.log(minOperations(logs));
logs = ["d1/", "../", "../", "../"];
console.log(minOperations(logs));
logs = ["1/"];
console.log(minOperations(logs));

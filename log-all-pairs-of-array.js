/**
 * Log All Pairs of Array
 */

function logAllPairs(array) {
  let log = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
      log.push(array[i] + "-" + array[j]);
    }
  }
  console.log(log.length);
  return log;
}

logAllPairs([1, 2, 3, 4, 5]);

/**
 *
 * Meeting Rooms II
 *
 * https://leetcode.com/problems/meeting-rooms-ii/
 *
 * Given an array of meeting time intervals intervals where
 * intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // sort the start times
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  // sort the end times
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  let confRooms = 0;
  let endIdx = 0;
  for (i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIdx]) {
      confRooms++;
    } else {
      endIdx++;
    }
  }
  console.log(confRooms);
  return confRooms;
};

minMeetingRooms(
  (intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
minMeetingRooms(
  (intervals = [
    [7, 10],
    [2, 4],
  ])
);

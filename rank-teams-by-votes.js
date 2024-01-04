/**
 * Rank Teams by Votes
 *
 * https://leetcode.com/problems/rank-teams-by-votes/description/
 *
 * In a special ranking system, each voter gives a rank from highest to lowest to all teams participating in the competition.
 * The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position,
 * we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved.
 * If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.
 *
 * You are given an array of strings votes which is the votes of all voters in the ranking systems.
 * Sort all teams according to the ranking system described above.
 *
 * Return a string of all teams sorted by the ranking system.
 *
 *
 * Example 1:
 *
 * Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
 * Output: "ACB"
 * Explanation:
 * Team A was ranked first place by 5 voters. No other team was voted as first place, so team A is the first team.
 * Team B was ranked second by 2 voters and ranked third by 3 voters.
 * Team C was ranked second by 3 voters and ranked third by 2 voters.
 * As most of the voters ranked C second, team C is the second team, and team B is the third.
 * Example 2:
 *
 * Input: votes = ["WXYZ","XYZW"]
 * Output: "XWYZ"
 * Explanation:
 * X is the winner due to the tie-breaking rule. X has the same votes as W for the first position, but X has one vote in the second position, while W does not have any votes in the second position.
 * Example 3:
 *
 * Input: votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
 * Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
 * Explanation: Only one voter, so their votes are used for the ranking.
 *
 *
 * Constraints:
 *
 * 1 <= votes.length <= 1000
 * 1 <= votes[i].length <= 26
 * votes[i].length == votes[j].length for 0 <= i, j < votes.length.
 * votes[i][j] is an English uppercase letter.
 * All characters of votes[i] are unique.
 * All the characters that occur in votes[0] also occur in votes[j] where 1 <= j < votes.length.
 *
 */

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  // if there's only one vote, return that vote
  if (votes.length === 1) return votes[0];

  // determine total number of teams and team names.
  // Note: votes[0] is used here, but it could be any vote- it is used to determine the total number of teams and the team names.
  const teamNames = votes[0].split("");
  const numberOfTeams = teamNames.length;

  // create a Map where each key is a team name, and each value is an array of integers.
  // The integers will represent the team's votes in each position (1st, 2nd, 3rd, etc).
  // Array is all zeroes to start.
  const teamScores = new Map(
    teamNames.map((teamName) => [teamName, new Array(numberOfTeams).fill(0)])
  );

  // for each vote, iterate over the ranking
  for (vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      // i is the position (1st, 2nd, 3rd etc)
      // find the team in teamScores and increment the votes it has received in this position
      const teamName = vote[i];
      const teamScore = teamScores.get(teamName);
      teamScore[i]++;
    }
  }
  // find an array of team names,
  return teamNames
    .sort((a, b) => {
      for (let i = 0; i < teamNames.length; i++) {
        // Sort function compares two teams at a time. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description).

        // compare this team's score in this position with the next team's score in this position.
        // if there's a clear winner, return -1 or 1, breaking the loop.

        if (teamScores.get(a)[i] > teamScores.get(b)[i]) return -1;
        if (teamScores.get(a)[i] < teamScores.get(b)[i]) return 1;
        // if it's tied, the loop will continue to check the next position.
      }
      // if the two teams are tied across all positions, compare team names.
      return a < b ? -1 : 1;
    })
    .join("");
};

console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));
console.log(rankTeams(["WXYZ", "XYZW"]));
console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]));

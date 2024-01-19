/**
 * Divide Players Into Teams of Equal Skill
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description/
 *
 * 123 ms Beats 35.82% of users with JavaScript
 *
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  //sort skills in ascending order
  let skills = skill.sort((a, b) => a - b);
  let skLen = skills.length;

  // Divide the players into n / 2 teams
  const midlen = Math.floor(skLen / 2);
  team1 = skills.slice(0, midlen);
  // It is always optimal to pair the weakest available player with the strongest available player.
  team2 = skills.slice(midlen).reverse(); // reverse the second team , so it will be easy for other operations later

  // calc each teams skills
  const teamSkills = addArrays(team1, team2);

  // check if each team's skills are equal,
  // If so, the calc the team chemistry and return
  if (teamSkills.every((thing) => thing === teamSkills[0])) {
    const teamChemistry = multiplyArrays(team1, team2).reduce(
      (a, b) => a + b,
      0
    );

    return teamChemistry;
  } else {
    // if each team's skills are not equal
    return -1;
  }
};

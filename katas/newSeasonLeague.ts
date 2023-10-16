// https://www.codewars.com/kata/58de08d376f875dbb40000f1

type PremierLeagueTable = {
  [i: number]: string;
}
export function premierLeagueStandings(teamStandings: PremierLeagueTable): PremierLeagueTable {

  const newSeasonTable: PremierLeagueTable = {
    1: teamStandings['1']
  };

  delete teamStandings['1'];

  const teams = Object.values(teamStandings);
  teams.sort((a, b) => a.localeCompare(b));

  for(let i = 0; i < teams.length; i++) {
    newSeasonTable[i + 2] = teams[i];
  }
  return newSeasonTable;
}
import axios from 'axios';

export const nfl = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: nfl [team-city abbreviation] (e.g. nfl DAL)';
  }
  let nfl_api_key = process.env.NFL_API_KEY;
  let endpoint = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=${nfl_api_key}`;

  try {
    let response = await axios.get(endpoint);
    let data = response.data;
    let team = args[0];
    let find_team = data.find((t) => t.Team === team);
    
    if (!find_team) {
      return 'Invalid team name. Usage: nfl [team]';
    }
    
    return `
    Team Name: ${find_team.Name}
    Wins: ${find_team.Wins}
    Losses: ${find_team.Losses}
    `;
  } catch (error) {
    return `An error occurred: ${error}`;
  }
}

// import axios from 'axios';

// export const nfl = async (args: string[]): Promise<string> => {
//   let nfl_api_key = process.env.NFL_API_KEY;
//   const endpoint = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=${nfl_api_key}`;

//   try {
//     const response = await axios.get(endpoint);
//     const data = response.data;
//     let team = args[0];
//     let find_team = data.find((t) => t.Team === team);
    
//     if (!find_team) {
//       return 'Invalid team name. Usage: nfl [team]';
//     }
    
//     return `
//     Team Name: ${find_team.Name}
//     Wins: ${find_team.Wins}
//     Losses: ${find_team.Losses}
//     `;
//   } catch (error) {
//     return `An error occurred: ${error}`;
//   }
// }

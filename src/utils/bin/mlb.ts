import axios from 'axios';

export const mlb = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return usageInstruction();
  }

  const arg = args[0];
  if (/^[0-9]{8}$/.test(arg)) {
    return handleDateInput(arg);
  } else {
    return usageInstruction();
  }
};

const usageInstruction = () => `
Command to get MLB scores for a given date.

usage: mlb [date] (mmddyyyy)
`;

const formatDate = (dateStr: string) => {
  const [month, day, year] = [dateStr.substring(0, 2), dateStr.substring(2, 4), dateStr.substring(4, 8)];
  return `${year}-${month}-${day}`;
};

const handleDateInput = async (dateStr: string) => {
  const date = formatDate(dateStr);
  const endpoint = buildEndpoint(date);
  return fetchGames(endpoint);
};

const buildEndpoint = (date: string) => {
  const mlbApiKey = process.env.MLB_API_KEY;
  return `https://api.sportsdata.io/v3/mlb/scores/json/ScoresBasic/${date}?key=${mlbApiKey}`;
};

const fetchGames = async (endpoint: string) => {
    try {
      const response = await axios.get(endpoint);
      const data = response.data;
      if (data.length === 0) {
        return 'No games that day';
      }
      return formatGames(data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return 'Invalid command. Check usage: mlb [date] (mmddyyyy)';
      }
      return `An error occurred: ${error}`;
    }
  };
  
const formatGames = (games: any[]) => {
let output = '';
for (const game of games) {
  if (game.Status === 'Final') {
      output += `${game.AwayTeam} ${game.AwayTeamRuns} @ ${game.HomeTeam} ${game.HomeTeamRuns}\n`;
  } else if (game.Status === 'InProgress') {
      output += `${game.AwayTeam} ${game.AwayTeamRuns} @ ${game.HomeTeam} ${game.HomeTeamRuns} (Game is in progress. Score may be inaccurate.)\n`;
  } else if (game.Status === 'Scheduled') {
      const gameDate = new Date(game.DateTime);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      const formattedDate = gameDate.toLocaleDateString('en-US', options);
      output += `${game.AwayTeam} @ ${game.HomeTeam} - ${formattedDate} EST\n`;
  }
}
return output || 'No games that day';
};
  

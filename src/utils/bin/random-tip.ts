import Tips from '../../../tips.json';

export const tip = async (
    args: string[],
    callback?: (value: string) => string,
  ): Promise<string> => {
  if (args.length === 0) {
    return `Usage: tip [language]
Args:
- ls: list all available programming languages
- random: get a random programming language tip

Example: 
tip ls # to list all available programming languages
tip random # to get a random programming language tip`;
  }

  switch (args[0]) {
    case 'ls':
      let result = Tips.map((tip) => tip.name.toLowerCase()).join(', ');
      result += '\n\n';

      return result;
    case 'set':
      const selectedTheme = args[1];

      return callback(selectedTheme);
    case 'random':
        const randomTip = Tips[Math.floor(Math.random() * Tips.length)];
        let randomTipLanguage = randomTip.name.toLowerCase();
        let randomTipSpecific = randomTip.tips[Math.floor(Math.random() * randomTip.tips.length)];
        return `Tip for ${randomTipLanguage}: ${randomTipSpecific}`;
    default:
      const language = args[0].toLowerCase();
      const languageTip = Tips.find((tip) => tip.name.toLowerCase() === language);
    
    if (languageTip) {
      let specificTip = languageTip.tips[Math.floor(Math.random() * languageTip.tips.length)];
      return specificTip;
    } else {
      return `Language not found. Available languages are: ${Tips.map((tip) => tip.name.toLowerCase()).join(', ')}`;
      }
    }
};
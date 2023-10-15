import config from '../../../config.json';

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/${config.social.twitter}/`);

  return 'Opening Twitter...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening Github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening Linkedin...';
};

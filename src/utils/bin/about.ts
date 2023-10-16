import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  let bio = await getBio();
  bio += `
Use the 'linkedin' or 'email' commands to contact me.
  `

  return bio;
};

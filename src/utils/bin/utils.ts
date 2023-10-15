import { set } from 'date-fns';
import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:joeyflores74@gmail.com');

  return 'Opening mailto:joeyflores74@gmail.com...';
};

export const failure = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=uZwlAzr44ys');
  }, 1000);

  return 'Take notes from Giannis...';
};

export const credit = async (args?: string[]): Promise<string> => {
  let creds = args[0]
  switch (creds) {
    case 'donate':
      setTimeout(function () {
        window.open(packageJson.funding.url, '_blank');
      }, 800);
      return 'Opening donation url...'
    case 'repo':
      setTimeout(function () {
        window.open('https://github.com/m4tt72/terminal', '_blank');
      }, 800);
      return 'Opening repository...';
  }
  return `Huge shoutout to m4tt72 for the open-source terminal project. Personalized it and added some more features. More to come! \n\nUse the 'credit repo' command to check out the original project. Or the 'credit donate' command to donate to the original author.`;
}

export const bun = async (args?: string[]): Promise<string> => {
  return `
This is my first project using the new & exciting Bun JavaScript toolkit. Stay tuned for more projects using Bun!

To learn more about Bun, visit https://bun.sh/

Here's a quick overview of Bun:

🚀 Powered by Bun Toolkit 🚀
───────────────────────────────────────
Bun: The future of JavaScript & TypeScript development! Reimagining and optimizing the runtime, aiming to be the swift successor of Node.js.

Features:
🚴‍♂️ Fast JavaScript runtime
🛠️ Comprehensive toolset: script runner, test runner & more
📦 Enhanced, speed-optimized package manager
🔄 Designed for minimal adjustments: Migrate from Node.js with ease
🌟 Continuously evolving for broader Node.js compatibility & framework integrations

  `;
}


export const banner = (args?: string[]): string => {
  return `
                                                        
  d88bb  .d88b.  d88888b db    db  .o88b.  .d88b.     d8888b. d88888b db    db 
   '8P' .8P  Y8. 88'     '8b  d8' d8P  Y8 .8P  Y8.    88  '8D 88'     88    88 
    88  88    88 88ooooo  '8bd8'  8P      88    88    88   88 88ooooo Y8    8P 
    88  88    88 88~~~~~    88    8b      88    88    88   88 88~~~~~ '8b  d8' 
db. 88  '8b  d8' 88.        88    Y8b  d8 '8b  d8' db 88  .8D 88.      '8bd8'  
Y8888P   'Y88P'  Y88888P    YP     'Y88P'  'Y88P'  VP Y8888D' Y88888P    YP    
                                                                              

This is a terminal-like project built mostly in TypeScript. More features to come!

Type 'help' and press enter to see list of available commands.

--
`;
};

export const feedback = async (args?: string[]): Promise<string> => {
  return `
I'd love to hear your feedback. Please feel free to reach out to me on LinkedIn or email. I'm always open to new ideas and suggestions.

Curently working on allowing users to submit feedback directly from the terminal. Stay tuned!
  `
}
import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://m4tt72.com', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:hi@nm4tt72.com');

  return 'Opening mailto:hi@m4tt72.com...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const banner = (args?: string[]): string => {
  return `
                                                                   
  eeeee e   e  e   e eeeee e   e  e   e  e eeeee eeeee  e   e  eeeee 
  8   " 8   8  8   8 8   8 8   8  8   8  8 8  88 8   8  8   8  8   " 
  8eeee 8eee8e 8e  8 8e  8 8eee8e 8e  8  8 8   8 8eee8e 8eee8e 8eeee 
     88 88   8 88  8 88  8 88   8 88  8  8 8   8 88   8 88   8    88 
  8ee88 88   8 88ee8 88  8 88   8 88ee8ee8 8eee8 88   8 88   8 8ee88  v${packageJson.version}


--

--
`;
};

export const contact = async (args: string[]): Promise<string> => {
  setTimeout(function() {window.alert('Cease your investigation.')}, 4000);
  return 'Connecting...';
  
};
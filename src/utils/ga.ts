import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.REACT_APP_GA_KEY as string;

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (path: string, title: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: title
  });
};

export interface EventParams {
  category: string;
  action: string;
  label?: string;
}

export const logEvent = ({ category, action, label }: EventParams) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case '/' || '/home':
      return 'Home';
    case '/experience':
      return 'Experience';
    case '/skills':
      return 'Skills';
    case '/about':
      return 'About Me';
    case '/contact':
      return 'Contact';
    default:
      return 'Page Not Found';
  }
}

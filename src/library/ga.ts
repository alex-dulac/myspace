import ReactGA from 'react-ga4';

const GA_TRACKING_ID = String(process.env.REACT_APP_GA_KEY);

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

export const logGAEvent = (params: EventParams) => {
  ReactGA.event(params);
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

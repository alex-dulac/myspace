import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.REACT_APP_ANALYTICS_KEY as string;

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
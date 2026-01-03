import ReactGA from 'react-ga4';

const GA_TRACKING_ID = String(import.meta.env.VITE_GA_KEY);

export const initGA = () => {
	ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (path: string, title: string) => {
	if (!ReactGA.isInitialized) {
		return;
	}

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


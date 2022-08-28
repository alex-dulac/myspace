import {
	IconLookup,
	IconDefinition,
	findIconDefinition
} from '@fortawesome/fontawesome-svg-core';

const mailLookup: IconLookup = { prefix: 'fas', iconName: 'envelope' };
export const mailIconDefinition: IconDefinition = findIconDefinition(mailLookup);

const linkedinLookup: IconLookup = { prefix: 'fas', iconName: 'linkedin' };
export const  linkedinIconDefinition: IconDefinition = findIconDefinition(linkedinLookup);

const githubLookup: IconLookup = { prefix: 'fas', iconName: 'github' };
export const  githubIconDefinition: IconDefinition = findIconDefinition(githubLookup);

const lastfmLookup: IconLookup = { prefix: 'fas', iconName: 'lastfm' };
export const  lastfmIconDefinition: IconDefinition = findIconDefinition(lastfmLookup);

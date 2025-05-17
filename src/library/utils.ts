import { Page, pages } from "@components/Layout";

export const hasExtraPath = () => {
	const path = window.location.pathname;
	return path !== '/' && path !== '';
};

export const scrollToSection = (page: Page) => {
	document.getElementById(page.divId)?.scrollIntoView({
		block: "start",
		behavior: "smooth"
	});
}

export function getElementVisibility(element: HTMLElement): number {
	const rect = element.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;

	// If the element is not visible at all
	if (rect.bottom < 0 || rect.top > windowHeight) {
		return 0;
	}

	// If the element is fully visible
	if (rect.top >= 0 && rect.bottom <= windowHeight) {
		return 1;
	}

	// If the element is partially visible
	const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
	return visibleHeight / rect.height;
}

export function getMostVisiblePage(): Page | null {
	let maxVisibility = 0;
	let mostVisiblePage: Page | null = null;

	pages.forEach(page => {
		const element = document.getElementById(page.divId);
		if (element) {
			const visibility = getElementVisibility(element);
			if (visibility > maxVisibility) {
				maxVisibility = visibility;
				mostVisiblePage = page;
			}
		}
	});

	return mostVisiblePage;
}
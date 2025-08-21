import { Page, pages } from "@components/Layout";

export function hasExtraPath(): boolean {
	const path = window.location.pathname;
	return path !== '/' && path !== '';
}

export function scrollToSection(page: Page, smooth: boolean): void {
	const element = document.getElementById(page.divId);
	const section = page.divId === 'home' ? document.documentElement : element?.parentElement;

	if (section) {
		const rect = section.getBoundingClientRect();
		const offsetTop = window.scrollY + rect.top - 100;

		window.scrollTo({
			top: offsetTop,
			behavior: smooth ? "smooth" : "auto",
		});
	}
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

export const shuffleArray = (array: any[]) => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

export const shuffledDogImages = () => {
	const dogImages = [
		"/images/dogs/01_dog.jpg",
		"/images/dogs/02_dog.jpg",
		"/images/dogs/03_dog.jpg",
		"/images/dogs/05_dog.jpg",
		"/images/dogs/06_dog.jpg",
		"/images/dogs/07_dog.jpg",
		"/images/dogs/08_dog.jpg",
		"/images/dogs/09_dog.jpg",
		"/images/dogs/11_dog.jpg",
	];

	return shuffleArray(dogImages);
}

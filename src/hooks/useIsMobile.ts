import { createContext, useCallback, useEffect, useState } from "react";

// Mobile width threshold; 768 is the general breakpoint for tablets and smaller devices
export const MOBILE_WIDTH: number = 768;
export const MobileContext = createContext<boolean>(false);

export const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);

	const handleResize = useCallback(() => {
		setIsMobile(window.innerWidth < MOBILE_WIDTH);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return isMobile;
};

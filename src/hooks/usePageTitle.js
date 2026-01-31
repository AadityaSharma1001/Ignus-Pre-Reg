import { useEffect } from 'react';

/**
 * Custom hook to set page title
 * @param {string} title - The page title (will be appended with " | Ignus 2026")
 */
const usePageTitle = (title) => {
    useEffect(() => {
        const baseTitle = "Ignus 2026";
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;

        // Cleanup: reset to base title when component unmounts
        return () => {
            document.title = baseTitle;
        };
    }, [title]);
};

export default usePageTitle;

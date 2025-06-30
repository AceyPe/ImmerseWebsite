import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
        // Wait for DOM to render before scrolling
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
        } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
};

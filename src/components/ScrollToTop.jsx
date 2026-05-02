import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If mobile (screen width < 768px), scroll to 100px
    const scrollPosition = window.innerWidth < 768 ? 670 : 0;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

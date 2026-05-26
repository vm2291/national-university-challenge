import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global reveal-on-scroll. Re-scans the DOM whenever the route changes,
 * so [data-reveal] elements on any page animate into view.
 */
const RevealRoot = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change for a clean entry
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const attach = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      els.forEach((el) => {
        if (el.dataset.reveal !== "in") el.dataset.reveal = "";
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).dataset.reveal = "in";
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      els.forEach((el) => io.observe(el));
      return io;
    };

    // Defer to next frame so route content is mounted
    const id = requestAnimationFrame(() => {
      const io = attach();
      (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO = io;
    });

    return () => {
      cancelAnimationFrame(id);
      const io = (window as unknown as { __revealIO?: IntersectionObserver }).__revealIO;
      io?.disconnect();
    };
  }, [pathname]);

  return null;
};

export default RevealRoot;
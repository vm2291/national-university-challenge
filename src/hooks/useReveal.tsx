import { useEffect } from "react";

/**
 * Auto-attaches an IntersectionObserver to every [data-reveal] in the document.
 * Sets data-reveal="in" once visible. Idempotent across mounts.
 */
export const useReveal = () => {
  useEffect(() => {
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
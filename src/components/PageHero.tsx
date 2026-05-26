import { ReactNode } from "react";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;          // pass JSX so caller can italicize words
  intro?: ReactNode;
  meta?: ReactNode;           // optional row beneath intro (e.g. date · venue)
  align?: "left" | "center";
}

/**
 * Editorial page hero used across all subpages for cohesive feel.
 * Big serif headline (Fraunces), italic accent word, kicker label,
 * decorative integral mark, ornamental divider, ambient grain bg.
 */
const PageHero = ({ kicker, title, intro, meta, align = "left" }: PageHeroProps) => {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-grain">
      {/* Decorative integral symbol */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[-3rem] md:right-4 font-display-italic text-[20rem] md:text-[28rem] leading-none text-secondary/[0.06] select-none"
      >
        ∫
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-5xl mx-auto flex flex-col gap-6 ${alignCls}`}>
          <div className="kicker animate-fade-up" style={{ animationDelay: "0ms" }}>
            {kicker}
          </div>
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-tertiary tracking-tight animate-blur-in"
            style={{ animationDelay: "100ms" }}
          >
            {title}
          </h1>
          {intro && (
            <p
              className="max-w-2xl text-lg sm:text-xl text-foreground/70 leading-relaxed animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {intro}
            </p>
          )}
          {meta && (
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-widest text-secondary font-semibold animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {meta}
            </div>
          )}
          <div
            className="h-px w-24 bg-secondary mt-2 origin-left animate-draw-line"
            style={{ animationDelay: "550ms" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
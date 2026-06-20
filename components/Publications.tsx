"use client";

import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useRef, useState } from "react";
import { publicationBooks, publications } from "@/lib/site-data";
import { MotionSection } from "./MotionSection";

export function Publications() {
  const [activeType, setActiveType] = useState<"newsletter" | "books">("newsletter");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeItems = activeType === "newsletter" ? publications : publicationBooks;
  const activeLabel = activeType === "newsletter" ? "Newsletter" : "Book";
  const scrollPublications = (direction: "left" | "right") => {
    scrollerRef.current?.scrollBy({
      left: direction === "left" ? -560 : 560,
      behavior: "smooth"
    });
  };

  return (
    <MotionSection id="publications" className="relative overflow-hidden bg-cream">
      {/* <img
        src="/images/publications-mountain-background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[190px] hidden w-full max-w-[1180px] -translate-x-1/2 opacity-55 md:block"
      /> */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-[80px] md:px-12 xl:px-[100px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Publications & Research</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-6xl">
              Exploring Loktak Through Research
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/68">
              Access biodiversity reports, wetland studies, conservation papers, and official
              publications documenting the ecological significance of Loktak Lake.
            </p>
          </div>
          <a href="#" className="hidden whitespace-nowrap text-sm font-bold text-sky-700 transition hover:text-gold sm:block">
            View all
          </a>
        </div>

        <div className="mb-10 flex gap-3">
          <button
            type="button"
            className={`rounded-full px-16 py-3 text-sm font-bold transition ${activeType === "newsletter"
                ? "bg-sky-700 text-white shadow-card"
                : "border border-teal/45 bg-white text-teal-dark hover:bg-teal hover:text-white"
              }`}
            onClick={() => setActiveType("newsletter")}
          >
            Newsletter
          </button>
          <button
            type="button"
            className={`rounded-full px-16 py-3 text-sm font-bold transition ${activeType === "books"
                ? "bg-sky-700 text-white shadow-card"
                : "border border-teal/45 bg-white text-teal-dark hover:bg-teal hover:text-white"
              }`}
            onClick={() => setActiveType("books")}
          >
            Books
          </button>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll publications left"
            className="absolute left-0 top-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-card transition hover:bg-sky-700 hover:text-white md:grid"
            onClick={() => scrollPublications("left")}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Scroll publications right"
            className="absolute right-0 top-1/2 z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-card transition hover:bg-sky-700 hover:text-white md:grid"
            onClick={() => scrollPublications("right")}
          >
            <ChevronRight size={22} />
          </button>

          <div ref={scrollerRef} className="-mx-5 flex gap-6 overflow-x-auto scroll-smooth px-5 pb-3 hide-scrollbar">
            {activeItems.map((item) => (
              <article
                key={`${item.meta}-${item.image}`}
                role="link"
                tabIndex={0}
                className="w-[245px] shrink-0 cursor-pointer overflow-hidden rounded-lg bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                onClick={() => window.open(item.pdf, "_blank", "noreferrer")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.open(item.pdf, "_blank", "noreferrer");
                  }
                }}
              >
                <img src={item.image} alt={item.title} className="h-[300px] w-full object-cover" />
                <div className="p-4">
                  <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-extrabold uppercase text-white">
                    {activeLabel}
                  </span>
                  <h3 className="mt-3 font-serif text-base font-bold tracking-[-0.01em] text-ink">{item.title}</h3>
                  <p className="text-xs font-semibold text-ink/55">{item.meta}</p>
                  <a
                    href={item.pdf}
                    download
                    onClick={(event) => event.stopPropagation()}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-gold"
                  >
                    <Download size={15} /> Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

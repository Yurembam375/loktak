import { ArrowRight } from "lucide-react";
import { initiatives } from "@/lib/site-data";
import { MotionSection } from "./MotionSection";

export function Initiatives() {
  return (
    <MotionSection id="initiatives" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Our initiatives</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-6xl">
              Protecting Loktak Through Action
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/68">
              Through restoration projects, community partnerships, and biodiversity conservation,
              we are working to protect the ecological future of Loktak Lake and its wetland ecosystems.
            </p>
          </div>
          <a href="#" className="hidden whitespace-nowrap text-sm font-bold text-sky-700 transition hover:text-gold sm:block">
            View all
          </a>
        </div>

        <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
          {initiatives.map((item) => (
            <article key={item.title} className="group grid grid-cols-[110px_1fr] gap-5 sm:grid-cols-[136px_1fr]">
              <div className="h-28 overflow-hidden rounded-xl bg-paper shadow-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="progressive-image-zoom h-full w-full object-cover"
                />
              </div>
              <div className="self-center">
                <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-extrabold uppercase text-white">
                  {item.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold tracking-[-0.01em] text-ink">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/66">{item.text}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                  Explore Initiative <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/site-data";
import { MotionSection } from "./MotionSection";

export function About() {
  return (
    <MotionSection id="about-loktak" className="bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="group overflow-hidden rounded-[22px] shadow-soft">
            <img src="/images/ChatGPT Image May 7, 2026, 02_17_01 PM 2.png" alt="Floating phumdi on Loktak Lake" className="progressive-image-zoom h-full min-h-[320px] w-full object-cover" />
          </div>
          <div>
            <p className="section-label">About Loktak Lake</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              A Living Wetland Unlike Any Other
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">
              Loktak Lake is the largest freshwater lake in Northeast India and home to the
              world&apos;s unique floating phumdis ecosystem. As a Ramsar site of international
              importance, it supports biodiversity, livelihoods, and centuries of cultural heritage.
            </p>
            <a href="#initiatives" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
              Learn more about Loktak <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl bg-teal p-5 text-white shadow-card md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.value} className="flex items-center gap-4 border-white/12 md:border-r md:last:border-r-0">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-gold/55 text-gold">
                  <Icon size={25} />
                </span>
                <span>
                  <strong className="block font-sans text-2xl font-bold leading-tight tracking-[-0.01em]">{stat.value}</strong>
                  <span className="block max-w-36 text-xs leading-4 text-white/72">{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

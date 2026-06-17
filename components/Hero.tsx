import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[686px] overflow-hidden bg-navy text-white">
      <img
        src="/images/Frame 375.png"
        alt="Sunrise over Loktak Lake wetlands"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/86 via-navy/44 to-navy/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/28 via-transparent to-transparent" />

      <div className="relative flex min-h-[686px] items-center px-[6.95vw] pb-12 pt-[88px]">
        <div className="w-full max-w-[620px]">
          <p className="section-label mb-5 text-[16px] leading-none tracking-normal">
            Northeast India&apos;s largest freshwater lake
          </p>
          <h1 className="font-serif text-[clamp(54px,5.3vw,76px)] font-bold leading-[1.12] tracking-normal text-white drop-shadow-xl">
            Preserving the World&apos;s Floating Lake Ecosystem
          </h1>
          <p className="mt-7 max-w-[600px] text-[clamp(18px,1.55vw,22px)] leading-[1.15] text-white/72">
            Discover the beauty, biodiversity, and ecological importance of Loktak Lake, the
            world&apos;s unique floating wetland ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#about-loktak"
              className="inline-flex h-[50px] min-w-[210px] items-center justify-center gap-2 rounded-full bg-sky-700 px-7 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Explore Wetlands <ArrowRight size={17} />
            </a>
            <a
              href="#publications"
              className="inline-flex h-[50px] min-w-[210px] items-center justify-center rounded-full border border-white/16 bg-white/12 px-7 text-base font-bold text-white shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Browse Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

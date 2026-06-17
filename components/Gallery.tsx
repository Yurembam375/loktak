import { gallery } from "@/lib/site-data";
import { MotionSection } from "./MotionSection";

export function Gallery() {
  const frameClass = "overflow-hidden rounded-[24px] shadow-card";
  const imageClass = "h-full w-full scale-[1.16] object-cover";

  return (
    <MotionSection id="gallery" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1540px] px-5 lg:px-8">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Gallery</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-6xl">
              Moments From Loktak Lake
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/68">
              A visual journey through the landscapes, biodiversity, communities, and changing
              seasons of Loktak Lake.
            </p>
          </div>
          <a href="#" className="hidden whitespace-nowrap text-sm font-bold text-sky-700 transition hover:text-gold sm:block">
            View all
          </a>
        </div>

        <div className="grid gap-6 md:h-[500px] md:grid-cols-[0.75fr_2fr_2fr]">
          <div className="grid gap-6 md:grid-rows-2">
            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[0].image} alt={gallery[0].alt} className={imageClass} />
            </div>
            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[1].image} alt={gallery[1].alt} className={imageClass} />
            </div>
          </div>
          <div className={`${frameClass} h-[360px] md:h-full`}>
            <img src={gallery[2].image} alt={gallery[2].alt} className={imageClass} />
          </div>
          <div className="grid gap-6 md:grid-rows-2">
            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[3].image} alt={gallery[3].alt} className={imageClass} />
            </div>
            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[4].image} alt={gallery[4].alt} className={imageClass} />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

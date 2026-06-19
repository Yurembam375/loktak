// import { gallery } from "@/lib/site-data";
// import { MotionSection } from "./MotionSection";

// export function Gallery() {
//   const frameClass = "group relative overflow-hidden rounded-[32px] bg-transparent shadow-[0_10px_30px_rgba(15,23,42,0.08)]";
//   const imageClass = "absolute -inset-px h-[calc(100%+2px)] w-[calc(100%+2px)] max-w-none rounded-[inherit] object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105";
//   return (
//     <MotionSection id="gallery" className="relative overflow-hidden bg-white py-16 md:py-20">
//       <img
//         src="/images/gallery-lotus-background.png"
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute right-[7%] top-8 hidden w-[340px] opacity-70 md:block xl:right-[8%] xl:w-[410px]"
//       />
//       <img
//         src="/images/gallery-lotus-background.png"
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-24 bottom-0 hidden w-[300px] -rotate-12 opacity-45 md:block"
//       />
//       <div className="relative mx-auto max-w-[1540px] px-5 lg:px-8">
//         <div className="mb-9 flex items-end justify-between gap-6">
//           <div>
//             <p className="section-label">Gallery</p>
//             <h2 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-6xl">
//               Moments From Loktak Lake
//             </h2>
//             <p className="mt-4 max-w-3xl text-base leading-7 text-ink/68">
//               A visual journey through the landscapes, biodiversity, communities, and changing
//               seasons of Loktak Lake.
//             </p>
//           </div>
//           <a href="#" className="hidden whitespace-nowrap text-sm font-bold text-sky-700 transition hover:text-gold sm:block">
//             View all
//           </a>
//         </div>
//         <div className="grid gap-6 md:h-[500px] md:grid-cols-[0.75fr_2fr_2fr]">
//           <div className="grid gap-6 md:grid-rows-2">
//             <div className={`${frameClass} h-[220px] md:h-full`}>
//               <img src={gallery[0].image} alt={gallery[0].alt} className={imageClass} />
//             </div>
//             <div className={`${frameClass} h-[220px] md:h-full`}>
//               <img src={gallery[1].image} alt={gallery[1].alt} className={imageClass} />
//             </div>
//           </div>
//           <div className={`${frameClass} h-[360px] md:h-full`}>
//             <img src={gallery[2].image} alt={gallery[2].alt} className={imageClass} />
//           </div>
//           <div className="grid gap-6 md:grid-rows-2">
//             <div className={`${frameClass} h-[220px] md:h-full`}>
//               <img src={gallery[3].image} alt={gallery[3].alt} className={imageClass} />
//             </div>
//             <div className={`${frameClass} h-[220px] md:h-full`}>
//               <img src={gallery[4].image} alt={gallery[4].alt} className={imageClass} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </MotionSection>
//   );
// }
import { gallery } from "@/lib/site-data";
import { MotionSection } from "./MotionSection";

export function Gallery() {
  // const frameClass =
  //   "group relative overflow-hidden rounded-[28px] bg-transparent shadow-[0_8px_24px_rgba(15,23,42,0.10)]";

  // const imageClass =
  //   "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-in-out group-hover:scale-110";
  // const frameClass =
  //   "group relative overflow-hidden rounded-[32px] bg-transparent shadow-[0_8px_24px_rgba(15,23,42,0.12)]";
  const frameClass =
    "group relative overflow-hidden rounded-[32px] bg-transparent shadow-[0_8px_24px_rgba(15,23,42,0.12)]";
  // const imageClass =
  //   "absolute inset-0 block h-full w-full rounded-[inherit] object-cover object-center transition-transform duration-[1200ms] ease-in-out group-hover:scale-110";
  const imageClass =
    "progressive-image-zoom absolute -inset-6 block h-[calc(100%+48px)] w-[calc(100%+48px)] max-w-none object-cover object-center [--zoom-end:1.08]";
  return (
    <MotionSection
      id="gallery"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      <img
        src="/images/gallery-lotus-background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-0 hidden w-[420px] opacity-70 md:block"
      />

      <img
        src="/images/gallery-lotus-background.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 hidden w-[320px] -rotate-12 opacity-40 md:block"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Gallery</p>

            <h2 className="mt-3 font-serif text-5xl font-bold leading-none tracking-[-0.02em] text-ink md:text-[72px]">
              Moments From Loktak Lake
            </h2>

            <p className="mt-5 max-w-[900px] text-[22px] leading-[1.65] text-ink/68">
              A visual journey through the landscapes, biodiversity, communities, and changing
              seasons of Loktak Lake.
            </p>
          </div>

          <a
            href="#"
            className="hidden whitespace-nowrap pr-[10%] text-2xl font-medium text-sky-700 transition hover:text-gold sm:block"
          >
            View all
          </a>
        </div>

        <div className="grid gap-7 md:h-[500px] md:grid-cols-[0.75fr_2fr_2fr]">
          <div className="grid gap-7 md:grid-rows-2">
            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[0].image} alt={gallery[0].alt} className={imageClass} />
            </div>

            <div className={`${frameClass} h-[220px] md:h-full`}>
              <img src={gallery[1].image} alt={gallery[1].alt} className={imageClass} />
            </div>
          </div>

          <div className={`${frameClass} h-[500px] md:h-full`}>
            <img src={gallery[2].image} alt={gallery[2].alt} className={imageClass} />
          </div>

          <div className="grid gap-7 md:grid-rows-2">
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

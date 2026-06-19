import { MotionSection } from "./MotionSection";

const basinParagraphs = [
  "The hill areas of Manipur constituting catchments of Loktak and associated wetlands fall within Manipur River Basin covering an area of 6,872 sq km and representing 31% of the total geographical area of the state.",
  "The basin is characterized by the presence of several shallow and highly vegetated wetlands, locally called Pat, in the central and southern part of Manipur Valley. The wetlands are located in the interfluvial areas as different tributaries, and hill streams connect with the main river channel. The presence of depressions along the river channel, a semi impervious substrate, constricted outflow at Ithai, and a sudden rise in riverbed downstream Ithai at Sugnu create conducive conditions for maintenance of this extensive wetland regime.",
  "These lakes covered about 4.95% (340 sq. km as observed in the Survey of India Topo Map, 1970) of the entire basin area. The important wetlands include Loktak, Pumlen, Lamjao, Khoidum, Kharung, Ikop, and Waithou. Loktak Lake is the largest lake covering 61% of the identified wetland regime. These wetlands are essentially floodplain wetlands of Manipur River interconnected through a complex network of drainage systems.",
  "These wetlands account for approximately 16% of the entire water available in the basin and hence play an important role in the management of water resources in the basin. These floodplain wetlands absorb floodwater during monsoon and are used for agriculture during dry seasons. The wetlands support rich biodiversity, particularly fishery resources. Overall 45 villages and 29 towns are located in and around these wetlands. More than 3 lakh people depend on the wetlands and their resources for their sustenance."
];

export function ManipurRiverBasinSection() {
  return (
    <MotionSection id="manipur-river-basin" className="bg-white text-ink">
      <section className="group relative min-h-[520px] overflow-hidden text-white md:min-h-[650px]">
        <img
          src="/images/manipur-river-basin-hero.jpg"
          alt="Aerial view of Loktak wetland floating vegetation"
          className="progressive-image-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/28" />
        <div className="relative flex min-h-[520px] items-center justify-center px-6 text-center md:min-h-[650px]">
          <div className="w-full max-w-3xl">
            <h1 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] md:text-6xl">
              Manipur River Basin
            </h1>
            <div className="mx-auto mt-8 h-px max-w-xl bg-white/85" />
          </div>
        </div>
      </section>

      <section className="grid min-h-screen gap-10 px-6 py-16 md:px-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[640px] items-center justify-center">
          <img
            src="/images/manipur-river-basin-map.png"
            alt="Map of Manipur River Basin"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex items-start">
          <div className="max-h-[78vh] max-w-[650px] overflow-y-auto pr-2">
            <div className="space-y-7 text-base leading-8 text-ink/70">
              {basinParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

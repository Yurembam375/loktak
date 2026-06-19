import { MotionSection } from "./MotionSection";

const wetlandComplexParagraphs = [
  "The LWC is a complex of shallow highly vegetated wetlands located in the southern part of Manipur Valley along Manipur River. Spanning between 24.40° to Con 24.72 latitudes and 93.76ºto 93.990 longitudes, the wetlands are located in the interfluvial areas as different tributaries, and hill streams connect with the main river channel. Presence of depressions along the river channel, a semi impervious substrate, constricted outflow at Ithai and a sudden rise in riverbed downstream Ithai at Sugnu create conducive conditions for maintenance of this extensive wetland regime, locally called pat areas. The margins of LWC are diffuse and merge on the exterior with fish farms and rice fields, with small hillocks marking the boundary on the southern end.",
  "Wetlands constitute 6.8% of the total land area of the Manipur River Basin. The important wetlands locally called pats are - Loktak, Lamphel, Waithou, Ikop, Kharung, Lousi, Khoidum, Lamjao, and Pumlen. The Loktak Lake is the largest pat within the Manipur River basin covering 61% of the total identified wetlands of Manipur. About 20 small and large pats including Loktak, Takmu, Ungamen, Laphupat, Thammumacha, Khulak, Yena, Sana pat, Utra pat, and Tharopokpi are part of the Loktak Lake which are quite distinct during the lean period.",
  "During the rainy season, most of these pats become contiguous and merge under one sheet of water but can be distinguished separately during the dry season at 766 m above MSL. The wetlands covered an area of 340 sq. km in 1970 which has increased to 469 sq. km as estimated in 2002 after the construction of Ithai barrage (Maps 5 and 6). These wetlands play an important role in providing livelihood support to the people food, fodder, fuel, timber, medicines, and other products. They also harbour rich biodiversity and are of great cultural importance to the people of Manipur.",
  "The wetlands of Manipur River Basin are essentially floodplain wetlands. People living in and around the wetlands have wisely used these wetlands for agriculture and fisheries before the construction of hydraulic structures and other water resources development projects. These wetlands through the provisioning of fisheries, aquatic vegetation, and other resources support the livelihoods of a large population living in and around them. The periodic inundation bringing nutrient-rich sediments ensured highly productive agriculture and thus served as the lifeline of the region."
];

export function LoktakWetlandComplexSection() {
  return (
    <MotionSection id="loktak-wetland-complex" className="bg-white text-ink">
      <section className="group relative min-h-[520px] overflow-hidden text-white md:min-h-[650px]">
        <img
          src="/images/loktak-wetland-complex-hero-new.jpg"
          alt="Aerial view of Loktak Wetland Complex"
          className="progressive-image-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/24" />
        <div className="relative flex min-h-[520px] items-center justify-center px-6 text-center md:min-h-[650px]">
          <div className="w-full max-w-4xl">
            <h1 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] md:text-6xl">
              Loktak Wetland Complex
            </h1>
            <div className="mx-auto mt-8 h-px max-w-xl bg-white/85" />
          </div>
        </div>
      </section>

      <section className="grid min-h-screen gap-10 px-6 py-16 md:px-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1200px] items-start justify-center">
          <img
            src="/images/loktak-wetland-complex-map.png"
            alt="Map of Loktak Wetland Complex"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex items-start">
          <div className="max-h-[78vh] max-w-[650px] overflow-y-auto pr-2">
            <div className="space-y-7 text-base leading-8 text-ink/70">
              {wetlandComplexParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

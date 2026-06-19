import { MotionSection } from "./MotionSection";

const loktakLakeParagraphs = [
  "Loktak Lake is considered the lifeline of the people of Manipur due to its importance in their socio-economic and cultural life. It is the largest natural freshwater lake in the northeastern region and plays an important role in providing ecological and economic security to the region. A large population living in and around the lake depends upon its resources for their sustenance. The lake is rich in biodiversity and has been designated as a Wetland of International Importance under Ramsar Convention in 1990. The Keibul Lamjao National Park located in the southern part of the lake is a unique floating wildlife reserve and is the refuge of the highly endangered brow-antlered deer, locally called Sangai. The lake has also been the breeding ground of several riverine fishes and continues to be a vital fisheries resource. It supports a significant population of migratory and resident waterfowl. Loktak Lake is located between 930 46′ and 930 55′ E and from 240 25′ to 240 42’N is a floodplain wetland of Manipur River, which is flooded by its lateral flows as well as backflow of water from Sugunu hump. Further, the confluence of several rivers, particularly Chakpi, is responsible for the inundation of large areas. The lake earlier used to experience large fluctuations in the water level during the year and several pats with the Loktak were distinct during the low water phase and merged into one sheet of water during high floods. The commissioning of Ithai barrage in 1983 has brought about drastic changes in the character of the wetland from fluctuating water levels to more or less constant water levels. The lake is oval-shaped with a maximum length and width of 32 km and 13 km respectively. The depth of the lake varies between 0.5 and 4.6m with an average recorded at 2.7m. The lake covers an area of 287 sq km which is mainly dictated by the maintenance of the water level at Ithai at 768.5 m above MSL. There are 14 hills located in the Lake varying in size and elevation and appear as islands in the southern part of the lake. The most prominent among these are Sendra, Ithing, and Thanga islands.",
  "The characteristic feature of Loktak is the presence of floating islands, locally called phumdis. They are a heterogeneous mass of soil, vegetation and organic matter at various stages of decomposition. Phumdis occur in various sizes and thicknesses, occupying almost half of the lake area. Southern portion of Loktak Lake (south of Thanga, Ithing and Sendra islands) forms the Keibul Lamjao National Park, which is a unique floating wildlife national park in India. The park covers an area of 40 sq. km. out of which approximately 15 sq. km is covered by thick phumdis constituting the core area of the National Park. The park is the natural habitat of the most endangered ungulate species, the brow-antlered deer. The lake is an important source of water, fisheries and vegetation providing sustenance to a large population dependent upon lake resources for their sustenance. The lake water is used for irrigation, domestic purposes and power generation. The Lake vegetation is harvested for use as food, fodder, fiber, fuel, handicrafts and medicinal purposes. National Hydro Electric Power Corporation (NHPC) is an important beneficiary using lake water for power generation with a total installed capacity of 105 MW. Loktak with its several islands located inside the lake and surrounded by floating phumdis of different geometrical shapes makes it a unique destination for tourism. Based on its rich biodiversity and socio economic importance, Loktak Lake has been designated by India as a Wetland of International Importance under Ramsar Convention in 1990. It is also included in the list of priority wetlands identified by the Government of India for intensive conservation and management purposes."
];

export function LoktakLakeSection() {
  return (
    <MotionSection id="loktak-lake" className="bg-white text-ink">
      <section className="group relative min-h-[520px] overflow-hidden text-white md:min-h-[650px]">
        <img
          src="/images/loktak-lake-hero-new.webp"
          alt="Aerial view of Loktak Lake"
          className="progressive-image-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/24" />
        <div className="relative flex min-h-[520px] items-center justify-center px-6 text-center md:min-h-[650px]">
          <div className="w-full max-w-3xl">
            <h1 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] md:text-6xl">
              Loktak Lake
            </h1>
            <p className="mt-4 font-sans text-lg font-medium leading-none tracking-normal text-white/92 drop-shadow-[0_3px_14px_rgba(0,0,0,0.28)] md:text-2xl">
              Lifeline of Manipur
            </p>
            <div className="mx-auto mt-7 h-px max-w-[360px] bg-white/70" />
          </div>
        </div>
      </section>

      <section className="grid min-h-screen gap-10 px-6 py-16 md:px-16 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-28 lg:py-24">
        <div className="mx-auto flex w-full max-w-[760px] items-start justify-center">
          <img
            src="/images/loktak-lake-map.png"
            alt="Map of Loktak Lake"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="flex items-start">
          <div className="max-h-[78vh] max-w-[650px] overflow-y-auto pr-2">
            <div className="space-y-7 text-base leading-8 text-ink/70">
              {loktakLakeParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

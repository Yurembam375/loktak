import { MotionSection } from "./MotionSection";

const ldaParagraphs = [
  "Loktak Development Authority is the nodal state government organization mandated for the conservation and sustainable management of Loktak Lake. It was one of the first special purpose vehicles constituted for wetland management in the country. The Authority was constituted in 1987 as a government society (under the Societies Act XXI of 1860) under the aegis of the Department of Irrigation and Flood Control, Government of Manipur.",
  "The enactment of the ‘The Manipur Loktak Lake (Protection) Act, 2006 (Manipur Act 3 of 2006) notified in the Manipur Gazette, Imphal, the 5th April 2006 ascribed the Authority with a legal basis to provide for administration, control, protection, improvement, conservation and development of the natural environment of the Loktak Lake and for matters connected with as incidental thereto. The Authority now functions under the aegis of the Department of Forest and Environment, Government of Manipur.",
  "The authority, over the years, has grown into a professional lake management organization through the experiences gained and a systematic process of capacity building at various levels to effectively respond to the challenges of managing Loktak Lake through integrated lake basin management practices. The organizational structure of LDA has become more multidisciplinary over the years. The establishment of the Project Management Unit (PMU) has strengthened its project management and administration capacity.",
  "The authority is also equipped with advanced equipment and machinery for both land and water management works needed for lake conservation and management.",
  "The authority has set up a state of art Lake Monitoring Laboratory that monitors the health of the Lake Ecosystem based on a set of wide-ranging parameters. A network of hydro-meteorological stations has also been set up to monitor the hydrological regime of the Manipur River Basin as a whole while Remote Sensing and GIS laboratory has been spearheading monitoring of the wetland regime and the entire Manipur River basin especially the forest regime of such a large spatial dimension."
];

export function LdaSection() {
  return (
    <MotionSection id="lda" className="scroll-mt-[88px] bg-white text-ink">
      <div className="grid min-h-screen lg:grid-cols-[1.02fr_1fr]">
        <div className="group min-h-[420px] overflow-hidden lg:min-h-screen">
          <img
            src="/images/lda-hero.png"
            alt="Loktak Lake community member moving through wetland reeds by boat"
            className="progressive-image-zoom h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-screen items-start px-6 py-16 md:px-16 lg:px-28 lg:py-24">
          <div className="max-h-[72vh] w-full overflow-y-auto pr-2">
            <h2 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              Loktak
              <span className="block">Development</span>
              <span className="block">Authority</span>
            </h2>

            <div className="mt-20 border-t border-ink/70 pt-8">
              <div className="space-y-6 text-base leading-8 text-ink/70">
                {ldaParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

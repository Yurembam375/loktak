import { MotionSection } from "./MotionSection";

export function Projects() {
  return (
    <MotionSection id="projects" className="bg-white py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-28">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1px_1.8fr] md:items-start md:gap-16">
          <div>
            <p className="section-label">Projects</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              Projects
            </h1>
            <p className="mt-5 max-w-[430px] text-base leading-8 text-ink/70">
              Activities and management interventions.
            </p>
          </div>

          <div className="hidden h-[264px] w-px bg-black/70 md:block" />

          <p className="max-w-[980px] text-base leading-8 text-ink/70">
            The Authority, over the years, has grown into a professional lake management
            organisation through a systematic process of capacity building at various levels and is
            becoming increasingly multidisciplinary to effectively respond to the challenges of lake
            management.
          </p>
        </div>

        <article className="mt-16 grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-start lg:gap-32">
          <img
            src="/images/project-stap.png"
            alt="Short Term Action Plan project at Loktak Lake"
            className="aspect-[950/739] w-full object-cover"
          />

          <div className="pt-8 lg:pt-28">
            <h2 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              The Short Term Action Plan (STAP)
            </h2>
            <div className="mt-20 border-t border-black pt-8">
              <p className="max-w-[640px] text-base leading-8 text-ink/70">
                The Short Term Action Plan (STAP) for Loktak Lake was formulated by Wetlands
                International - South Asia (WISA) in March 2009 as a response to the Planning
                Commission&apos;s review and direction for focusing on achieving ecological restoration
                of Loktak Lake is a priority within the ambit of the overarching Management Action
                Plan for Loktak Lake and associated wetlands. The STAP aims at conservation and
                sustainable utilization of Loktak Lake integrating Manipur River Basin for ecological
                security and livelihood improvement of local communities. An investment of Rs. 374
                crore over two years is entailed to achieve stipulated objectives.
              </p>
            </div>
          </div>
        </article>
      </div>
    </MotionSection>
  );
}

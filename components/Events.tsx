import { MotionSection } from "./MotionSection";

export function Events() {
  return (
    <MotionSection id="events" className="bg-white py-16 text-black md:py-24">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-28">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1px_1.8fr] md:items-start md:gap-16">
          <div>
            <p className="section-label">Events</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              Events
            </h1>
            <p className="mt-5 max-w-[390px] text-base leading-8 text-ink/70">
              Explore and discover Loktak Lake, the life-line of Manipur.
            </p>
          </div>

          <div className="hidden h-[183px] w-px bg-black/70 md:block" />

          <p className="max-w-[980px] text-base leading-8 text-ink/70">
            Restore and develop Loktak Lake resources and biodiversity for present and future
            generations through participatory processes, research and conservation activities.
          </p>
        </div>

        <div className="mt-20 border-t border-black pt-28">
          <article className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-start lg:gap-32">
            <div className="group overflow-hidden">
              <img
                src="/images/world-environment-day.png"
                alt="World Environment Day illustration"
                className="progressive-image-zoom aspect-[773/644] w-full object-cover"
              />
            </div>

            <div className="pt-8 lg:pt-20">
              <h2 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
                World Environment Day
              </h2>
              <div className="mt-5 max-w-[620px] space-y-6 text-base leading-8 text-ink/70">
                <p>
                  This World Environment Day 2022, please join Loktak Development Authority (LDA)
                  in taking a pledge to save Loktak Lake and associated wetlands and focus on living
                  sustainably in harmony with nature. LDA calls for collective, transformative
                  action to celebrate, protect and restore our precious Loktak Lake.
                </p>
                <p>
                  We believe that individuals and civil society are pivotal advocates,
                  awareness-raisers, and supporters. The more we raise our voices, emphasize what
                  needs to be done and point out who is responsible, the faster change will come.
                </p>
                <p>
                  Only our collective efforts can ensure this unique and beautiful lake remains a
                  comfortable home for our traditions, culture, and values.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </MotionSection>
  );
}

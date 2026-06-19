import { MotionSection } from "./MotionSection";

export function MissionSection() {
  return (
    <MotionSection id="mission" className="bg-white text-ink">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1fr]">
        <div className="flex min-h-[520px] items-start px-6 py-16 md:px-16 lg:min-h-screen lg:px-28 lg:py-28">
          <div className="w-full">
            <h1 className="font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              Mission
            </h1>

            <div className="mt-14 max-w-[640px] border-t border-ink/70 pt-8">
              <p className="text-base leading-8 text-ink/70">
                Restore and develop Loktak Lake resources and biodiversity for present and future
                generations through participatory processes, research and conservation activities.
              </p>
            </div>
          </div>
        </div>

        <div className="group min-h-[420px] overflow-hidden lg:min-h-screen">
          <img
            src="/images/explore zoom hover1 (8).png"
            alt="Community member carrying traditional basket through a forest path"
            className="progressive-image-zoom h-full w-full object-cover"
          />
        </div>
      </div>
    </MotionSection>
  );
}

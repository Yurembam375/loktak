import { MotionSection } from "./MotionSection";

const notices = [
  {
    date: "22/11/2024",
    title: "New date for applications for Empanelment of Contractor/Firms"
  },
  {
    date: "28/10/2024",
    title: "Notice inviting applications for Empanelment of Contractor/Firms"
  }
];

export function Notifications() {
  return (
    <MotionSection id="notifications" className="bg-white py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-28">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1px_1.75fr] md:items-start md:gap-16">
          <div>
            <p className="section-label">Notifications</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-none tracking-[-0.01em] text-ink md:text-6xl">
              Notifications
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/70">
              Access notices and circulars of LDA
            </p>
          </div>

          <div className="hidden h-[216px] w-px bg-black/70 md:block" />

          <p className="max-w-[970px] text-base leading-8 text-ink/70">
            Keibul Lamjao National Park is the only floating wildlife park in the world and is the
            natural habitat of &apos;Cervus eldi eldi&apos; locally called Sangai. The habitat consists
            of floating phumdis, hillocks and elevated strips of land.
          </p>
        </div>

        <div className="mt-16 rounded-xl border border-black p-6">
          <div className="grid gap-4">
            {notices.map((notice, index) => (
              <article
                key={notice.date}
                className={`flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between ${
                  index % 2 === 0 ? "bg-[#f2f2f2]" : "bg-white"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <time className="inline-flex w-fit rounded bg-[#12b7ea] px-3 py-2 text-2xl font-medium leading-none text-black">
                    {notice.date}
                  </time>
                  <h3 className="font-serif text-xl leading-normal text-black md:text-2xl">
                    {notice.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="inline-flex w-fit rounded bg-[#ffad3d] px-3 py-2 text-xl font-bold leading-none text-black transition hover:bg-[#f29a20]"
                >
                  Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

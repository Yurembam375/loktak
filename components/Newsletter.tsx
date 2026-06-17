import { Send } from "lucide-react";
import { MotionSection } from "./MotionSection";

export function Newsletter() {
  return (
    <MotionSection id="news-events" className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft md:aspect-[5040/1936] md:min-h-0 md:p-16">
          <img src="/images/Frame 308 (1).png" alt="" className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] max-w-none object-cover opacity-72" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/78 via-navy/35 to-transparent" />
          <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="section-label">Stay connected</p>
              <h2 className="mt-3 max-w-lg font-serif text-4xl font-bold leading-tight tracking-[-0.01em] md:text-6xl">
                Stay connected with Loktak
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/78">
                Subscribe for meaningful updates, environmental stories, publications, and
                conservation initiatives from Loktak Lake.
              </p>
            </div>
            <form className="flex w-full flex-col gap-3 rounded-[28px] bg-white p-3 shadow-card sm:flex-row sm:rounded-full sm:p-2">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="min-h-12 w-full flex-1 rounded-2xl px-5 text-sm text-ink outline-none sm:rounded-full"
              />
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 text-sm font-bold text-white transition hover:bg-sky-600 sm:w-auto sm:rounded-full"
              >
                <Send size={16} /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

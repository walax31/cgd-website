import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero/hero-section.png')",
        aspectRatio: "1507 / 455",
      }}
    >
      <div className="absolute bottom-5 left-1/2 flex w-full max-w-[1260px] -translate-x-1/2 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#24bca8] text-sm font-medium text-white"
            aria-label="Slide 1"
          >
            1
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-medium text-[var(--cgd-primary)]"
            aria-label="Slide 2"
          >
            2
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-medium text-[var(--cgd-primary)]"
            aria-label="Slide 3"
          >
            3
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-medium text-[var(--cgd-primary)]"
            aria-label="More slides"
          >
            ...
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#24bca8] text-lg text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#24bca8] text-lg text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

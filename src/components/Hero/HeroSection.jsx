import React, { useEffect, useMemo, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import heroMock from "../../assets/banner-image-3.webp";
import heroMock2 from "../../assets/background2.png";
import heroMock3 from "../../assets/background3.png";
import heroMock4 from "../../assets/background4.png";
import heroMock5 from "../../assets/banner-image-3.webp";

export default function HeroSection() {
  // ✅ Slide data: one image per slide + text
  const slides = useMemo(
    () => [
      { img: heroMock, words: ["platforms are digitals"] },
      { img: heroMock2, words: ["digital platforms"] },
      { img: heroMock3, words: ["mobile & web apps"] },
      { img: heroMock4, words: ["AI powered systems"] },
      { img: heroMock5, words: ["AI powered systems checking"] },
    ],
    []
  );

  const [active, setActive] = useState(0);

  // ✅ Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2800);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#cfeff6]">
      {/* background fade (blue -> white) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#bfe8f2] via-[#cfeff6] to-white" />

      <div className="relative mx-auto container px-6 pt-28 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl text-left md:pl-4">
            <p className="text-[18px] font-semibold leading-tight text-[#0b0b0b]">
              We&apos;re proud of <br className="hidden sm:block" />
              our work.
            </p>

            <h1 className="mt-7 font-extrabold tracking-tight text-[#0b0b0b]">
              <span className="block text-[64px] leading-[0.95] sm:text-[70px]">
                We create
              </span>

              {/* ✅ Text changes based on active slide */}
              <span className="block text-[#23b4d7]">
                <span className="inline-block min-h-[1.05em] text-[48px] leading-[0.95] sm:text-[40px]">
                  <Typewriter
                    key={active} // ✅ restart when slide changes
                    words={slides[active].words}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={35}
                    delaySpeed={900}
                  />
                </span>
              </span>
            </h1>

            {/* ✅ Clutch layout */}
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <p className="text-[11px] tracking-[0.25em] text-gray-600">
                  REVIEWED ON
                </p>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-end gap-4">
                <span className="text-[36px] font-semibold text-[#111] leading-none">
                  Clutch
                </span>

                <span className="text-sm tracking-wide text-gray-600 pb-[4px]">
                  16 REVIEWS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT (Carousel) */}
          <div className="relative flex justify-end">
            {/* glow effects */}
            <div className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[680px] -translate-y-1/2 rounded-full bg-[#9ddcff] blur-3xl opacity-60" />
            <div className="pointer-events-none absolute right-[70px] top-[62%] h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-[#6b4cff] opacity-35" />
            <div className="pointer-events-none absolute right-[10px] top-[66%] h-[320px] w-[520px] -translate-y-1/2 rounded-full bg-[#7d6bff] blur-3xl opacity-20" />

            {/* ✅ Carousel container */}
            <div className="relative w-full max-w-[560px] md:max-w-[610px] h-[420px] overflow-hidden rounded-[28px]">
              {/* track */}
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {slides.map((s, idx) => (
                  <div key={idx} className="relative min-w-full h-full">
                    {/* ✅ ONLY ONE IMAGE (no overlay) */}
                    <img
                      src={s.img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* dots */}
              <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === active ? "bg-white/90" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#ff3b30]"
      aria-hidden="true"
    >
      <path d="M12 17.27l-5.18 3.04 1.4-5.98L3 9.24l6.06-.52L12 3l2.94 5.72 6.06.52-5.22 5.09 1.4 5.98z" />
    </svg>
  );
}

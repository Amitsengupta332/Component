import React, { useEffect, useMemo, useState } from "react";

/**
 * ScaleTech-like Hero (React + Tailwind)
 * - Big headline: "Start Digital Journey"
 * - Subheadline (based on site title): Digital Engineering, Data Analytics, AI Solutions, SportsTech
 * - CTA: Know More + Contact Us
 * - Right side: simple 3-image banner slider (replace images with your assets)
 */
// ✅ Import your images from src/assets
import banner3 from "../../assets/banner-image-3.webp";
// import banner1 from "../../assets/banner-image-1.webp"; // add if you have
// import banner2 from "../../assets/banner-image-2.webp"; // add if you have

export default function HeroScaleTech() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        img: banner3, // replace with banner1 when available
        alt: "Banner 1",
      },
      {
        id: 2,
        img: banner3, // replace with banner2 when available
        alt: "Banner 2",
      },
      {
        id: 3,
        img: banner3,
        alt: "Banner 3",
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#0b1220]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white/80">
            DIGITAL ENGINEERING • DATA • AI • SPORTSTECH
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Start <span className="text-cyan-300">Digital</span> Journey
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            We help companies build scalable products with modern engineering,
            analytics, and AI—delivering high-quality solutions faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-300">
              Know More
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Contact us
            </a>
          </div>

          {/* Small stats row (optional) */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <Stat label="Solutions" value="Web / Mobile" />
            <Stat label="Focus" value="Cloud & AI" />
            <Stat label="Quality" value="Top-notch" />
          </div>
        </div>

        {/* Right: Banner / Slider */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-indigo-400/10" />

            <div className="relative h-[320px] w-full md:h-[420px]">
              {slides.map((s, idx) => (
                <img
                  key={s.id}
                  src={s.img}
                  alt={s.alt}
                  className={[
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    idx === active ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  draggable={false}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="relative flex items-center justify-center gap-2 p-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    idx === active ? "w-8 bg-cyan-300" : "w-2.5 bg-white/30",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 left-6 right-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur md:block">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold">
                Low-code, High-functionality • Mendix Excellence
              </p>
              <a
                href="#services"
                className="text-sm font-bold text-cyan-300 hover:text-cyan-200">
                Explore →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="mt-1 text-sm font-bold text-white">{value}</div>
    </div>
  );
}

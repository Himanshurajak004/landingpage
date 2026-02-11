"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BestSellerHero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* BROWN → BLACK GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #6b3f1d 0%,
              #4a2a16 20%,
              #2b160d 55%,
              #120a06 75%,
              #020617 100%
            )
          `,
        }}
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 pt-28 sm:pt-32 pb-64 text-center text-white">
        <div className="mx-auto max-w-3xl rounded-2xl bg-black/35 backdrop-blur-lg px-6 py-6">
          {/* Trustpilot */}
          <div className="mb-4 flex justify-center items-center gap-2 text-sm text-white/80">
            <span className="text-green-500">★</span>
            <span className="font-semibold">Trustpilot</span>
            <span className="text-green-400">★★★★★</span>
            <span>4.3 • Rated Excellent</span>
          </div>

          <h1 className="text-[26px] sm:text-[36px] md:text-[42px] font-semibold leading-tight">
            Discover{" "}
            <span className="text-white">WeAreWebsite Designers</span>
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-white/80">
            <span>✔ Instant product delivery</span>
            <span>✔ 14-day money-back guarantee</span>
            <span>✔ Lifetime updates</span>
            <span>✔ Pre-tested templates & ideas</span>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative -mt-56 z-20">
        {/* IMAGE FADE (SIDE LINES FIX) */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent
         via-[#020617]/10 to-[#020617]" />

        <img
          ref={imageRef}
          src="/bestseller.png"
          alt="Best seller assets"
          className="mx-auto w-full max-w-5xl px-4 sm:px-0"
        />
      </div>
    </section>
  );
}
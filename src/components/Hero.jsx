"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(badgeRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
      .fromTo(headingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.2")
      .fromTo(paraRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(buttonRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(imageWrapRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.2");
  }, []);

  return (
    <section className="relative min-h-[130vh] overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b1d0c] via-black to-[#0b1a3a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      {/* TOP CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 text-center text-white">

        {/* BADGE */}
        <div
          ref={badgeRef}
          className="mb-6 rounded-full border border-white/15 bg-black/40 px-4 py-1 text-sm backdrop-blur"
        >
          <span className="text-green-400">✔</span>{" "}
          <span className="text-white/80">Proven By Our Own Brands</span>
        </div>

        {/* HEADING */}
        <h1
          ref={headingRef}
          className="text-[36px] font-semibold leading-[1.22] tracking-tight md:text-[54px]"
        >
          Boutique Full Stack Growth Partner for eCom DTC Brands Looking to{" "}
          <span className="text-[#ef4444]">Scale to 8–9 Figures.</span>
        </h1>

        {/* SUBTEXT */}
        <p
          ref={paraRef}
          className="mt-5 max-w-2xl text-[15px] text-white/70 md:text-base"
        >
          Paid ads, killer creatives, email, landings and strategy.
          E-commerce growth, wrapped in beautiful processes.
        </p>

        {/* CTA */}
        <a
          ref={buttonRef}
          href="https://calendly.com/wearewebsitedesigners/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-xl bg-[#ef4444] px-10 py-4 text-sm font-semibold shadow-[0_0_24px_rgba(239,68,68,0.45)] transition hover:scale-105 hover:bg-[#dc2626]"
        >
          Book Your Discovery Call →
        </a>
      </div>

      {/* IMAGE STRIP (BOTTOM) */}
      <div
        ref={imageWrapRef}
        className="relative z-10 flex justify-center"
      >
        {/* GLOW */}
        <div className="absolute -top-10 h-[300px] w-[900px] rounded-full bg-gradient-to-r from-[#1e3a8a]/40 via-[#7c2d12]/30 to-[#1e3a8a]/40 blur-[140px]" />

        {/* IMAGE */}
        <img
          src="/hero.png"   // 👈 apni image
          alt="Brand Proof"
          className="w-[1400px] max-w-[95%] -rotate-2 rounded-2xl drop-shadow-[0_50px_90px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
}
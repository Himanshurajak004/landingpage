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
      .fromTo(headingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
      .fromTo(paraRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(buttonRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(imageWrapRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.2");
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%),linear-gradient(180deg,#050b1a,#000000)]" />

      {/* ===== TEXT AREA ===== */}
      <div
        className="
          relative z-10 mx-auto max-w-5xl
          min-h-[90svh] md:min-h-[80vh]
          pt-28 md:pt-0
          flex flex-col items-center justify-center
          px-6 text-center text-white
        "
      >
        <div
          ref={badgeRef}
          className="mb-6 rounded-full border border-white/15 bg-black/40 px-5 py-1.5 text-sm backdrop-blur"
        >
          <span className="text-green-400">✔</span>{" "}
          <span className="text-white/85">Proven By Our Own Brands</span>
        </div>

        <h1
          ref={headingRef}
          className="
            text-[34px] sm:text-[38px] md:text-[54px]
            font-semibold leading-[1.2]
          "
        >
          Boutique Full Stack Growth Partner for eCom DTC Brands Looking to{" "}
          <span className="text-[#ef4444]">Scale to 8–9 Figures.</span>
        </h1>

        <p
          ref={paraRef}
          className="
            mt-5 max-w-2xl
            text-[15px] sm:text-[16px] md:text-base
            text-white/75
          "
        >
          Paid ads, killer creatives, email, landings and strategy.
          E-commerce growth, wrapped in beautiful processes.
        </p>

        <a
          ref={buttonRef}
          href="#"
          className="
            mt-9 rounded-xl bg-[#ef4444]
            px-12 py-4
            text-sm font-semibold
            shadow-[0_0_32px_rgba(239,68,68,0.5)]
            transition active:scale-95
          "
        >
          Book Your Discovery Call →
        </a>
      </div>

      {/* FADE (SAFE FOR MOBILE) */}
      <div className="pointer-events-none absolute bottom-[18%] md:bottom-[30%] left-0 h-[140px] md:h-[200px] w-full bg-gradient-to-b from-black to-transparent z-20" />

      {/* ===== IMAGE AREA ===== */}
      <div
        ref={imageWrapRef}
        className="relative z-10 flex justify-center pb-24 md:pb-28 overflow-hidden"
      >
        <img
          src="/hero.png"
          alt="Brand Proof"
          className="
            relative z-10
            w-[135%] sm:w-[130%] md:w-full
            max-w-none md:max-w-[1900px]
            rounded-2xl
            drop-shadow-[0_80px_140px_rgba(0,0,0,0.85)]
            md:-rotate-2
          "
        />
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function DiscoverWeAreWebsiteDesignersHero() {
  const imageRef = useRef(null);
  const dropdownRef = useRef(null);
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);

  /* IMAGE ANIMATION ONLY */
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 24, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  /* DROPDOWN ANIMATION */
  useEffect(() => {
    if (open) {
      gsap.to(dropdownRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(arrowRef.current, { rotate: 180, duration: 0.25 });
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
      });
      gsap.to(arrowRef.current, { rotate: 0, duration: 0.25 });
    }
  }, [open]);

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-b
          from-[#6b4025]
          via-[#2a1a12]
          to-[#0b0d14]
        pt-32 pb-20
        max-md:pt-24 max-md:pb-16
      "
    >
      {/* ================= CARD ================= */}
      <div
        className="
          mx-auto max-w-6xl
          rounded-2xl
          bg-gradient-to-b from-[#6a4025] to-[#3a2318]
          px-12 py-10
          text-center shadow-xl

          max-md:max-w-[92%]
          max-md:px-5
          max-md:py-6
        "
      >
        {/* Trustpilot */}
        <div
          className="
            mb-4 flex justify-center items-center gap-2
            text-sm text-[#e6ded8]
            max-md:text-xs max-md:mb-3
          "
        >
          <span className="text-[#00b67a]">★ ★ ★ ★ ★</span>
          <span>4.3 · Rated Excellent</span>
        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl font-bold text-[#f5f3f1]
            max-md:text-[26px]
            max-md:leading-[1.25]
          "
        >
          Discover <br className="md:hidden" />
          wearewebsitedesigners services
        </h1>

        {/* Checklist */}
        <ul
          className="
            mt-6 flex flex-wrap justify-center gap-6
            text-sm text-[#e6ded8]

            max-md:mt-4
            max-md:flex-col
            max-md:gap-2
            max-md:text-left
          "
        >
          <li className="flex items-center gap-2">
            ✓ Instant product delivery
          </li>
          <li className="flex items-center gap-2">
            ✓ 14-day money-back guarantee
          </li>
          <li className="flex items-center gap-2">
            ✓ Lifetime updates
          </li>
          <li className="flex items-center gap-2">
            ✓ Pre-tested templates & ideas
          </li>
        </ul>
      </div>

      {/* ================= IMAGE ================= */}
      <div
        ref={imageRef}
        className="
          mt-16 flex justify-center
          max-md:mt-8
        "
      >
        <img
          src="/doneFor.png"
          alt="Discover wearewebsitedesigners"
          className="
            w-auto max-w-[900px] object-contain
            max-md:w-full max-md:max-w-[320px]
          "
        />
      </div>

      {/* ================= SHOP BY FIELD ================= */}
      <div className="mt-10 max-md:mt-8 flex justify-center">
        <div className="w-full max-w-4xl max-md:max-w-[92%]">
          <button
            onClick={() => setOpen(!open)}
            className="
              flex w-full items-center justify-between
              rounded-xl border border-white/20
              bg-[#0b0d14]
              px-6 py-4
              text-sm font-semibold text-white
            "
          >
            SHOP BY FIELD
            <span ref={arrowRef}>⌄</span>
          </button>

          <div
            ref={dropdownRef}
            style={{ height: 0, opacity: 0 }}
            className="
              mt-2 overflow-hidden
              rounded-xl border border-white/20
              bg-[#0b0d14]
            "
          >
            <div className="px-6 py-5 space-y-3 text-sm text-white">
              {[
                "All in one",
                "Creatives",
                "CRO",
                "Emails",
                "Done For You",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4 accent-white" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
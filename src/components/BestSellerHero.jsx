"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function BestSellerHero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const [open, setOpen] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[120vh]"
    >
      {/* Brown → Navy Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #8a552b 0%,
              #6c3d1c 40%,
              #3e1f10 75%,
              #020617 100%
            )
          `,
        }}
      />

      {/* TEXT */}
      <div className="relative z-10 pt-24 sm:pt-32 text-center text-white px-4 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl bg-black/30 backdrop-blur-md px-6 sm:px-16 py-12 sm:py-16 shadow-2xl">
          
          {/* Trustpilot */}
          <div className="mb-6 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-base sm:text-2xl text-white/85 text-center">
            <span className="text-green-400">★</span>
            <span>Trustpilot</span>
            <span className="text-green-400">★★★★★</span>
            <span className="text-white/70">
              4.3 • Rated Excellent
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[34px] sm:text-[70px] md:text-[61px] font-bold leading-[1.1] tracking-tight break-words">
            Discover wearewebsitedesigners
          </h1>

          {/* Features */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-white/80">
            <span>✔ Instant product delivery</span>
            <span>✔ 14-day money-back guarantee</span>
            <span>✔ Lifetime updates</span>
            <span>✔ Pre-tested templates & ideas</span>
          </div>

        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative z-20 -mt-16 sm:-mt-22 pb-16">
        <div className="pointer-events-none absolute 
        inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#000000]" />
        <img
          ref={imageRef}
          src="/bestseller.png"
          alt="Best seller assets"
          className="mx-auto w-full max-w-[1300px]"
        />
      </div>

      {/* ================= DROPDOWN SECTION ================= */}
      <div className="relative z-30 text-xl w-full py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9">

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-white items-start">

            {[
              { title: "SHOP BY TYPE", items: ["Templates", "Guidebooks", "AI Generators", "Bundles"] },
              { title: "SHOP BY FIELD", items: ["All in one", "Creatives", "CRO", "Copy"] },
              { title: "SHOP BY INDUSTRY", items: ["All", "Health & Beauty", "Fashion"] }
            ].map((dropdown, index) => (
              <div
                key={index}
                className="w-full md:flex-1 border border-white/40 rounded-xl bg-black shadow-[0_0_25px_rgba(255,255,255,0.05)]"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 font-semibold tracking-wide"
                >
                  {dropdown.title}
                  <span
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-3 text-white/80 text-base">
                    {dropdown.items.map((item, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="accent-green-500"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    

    </section>
  );
}
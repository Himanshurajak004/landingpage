"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Results() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const results = [
    {
      quote: "Wearewebsitedesigner helped us scale our revenue by 3× in just 6 months.",
      author: "Startup Founder",
    },
    {
      quote:
        "Their performance marketing strategy completely changed our growth trajectory.",
      author: "Marketing Head",
    },
    {
      quote:
        "Clean execution, clear insights, and results that actually compound.",
      author: "SaaS Company",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HEADING
      gsap.fromTo(
        headingRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // CARDS
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="mb-28 text-center text-[42px] font-semibold md:text-[56px] text-white"
        >
          <span className="inline-block">Results</span>{" "}
          <span className="inline-block">That</span>{" "}
          <span className="inline-block text-[#ef4444]">Speak</span>
        </h2>

        {/* CARDS */}
        <div className="grid gap-12 md:grid-cols-3">
          {results.map((r, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                relative rounded-[28px]
                border-2 border-white/10
                bg-[#0b0b0b]
                p-12
                transition-all duration-500
                hover:-translate-y-3
                hover:border-[#ef4444]
                hover:shadow-[0_0_80px_rgba(239,68,68,0.25)]
              "
            >
              {/* INNER GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] 
                bg-[radial-gradient(circle_at_top,#ef444430,transparent_60%)]" />

              <div className="relative z-10">
                <p className="mb-10 text-[16px] leading-relaxed text-white md:text-[20px]">
                  “{r.quote}”
                </p>

                <span className="text-sm font-semibold tracking-wide text-[#ef4444]">
                  — {r.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
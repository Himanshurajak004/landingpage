"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const caseStudies = [
  {
    image: "/case1.jpg",
    brand: "BRAINLUXURY™",
    title:
      "From $45k/mo spend to $250k/mo while lowering nCAC by 60–70% in 60 days.",
  },
  {
    image: "/case2.jpg",
    brand: "KANDY™",
    title: "From $0 to $40k net profit a month in less than 2 months.",
  },
  {
    image: "/case3.jpg",
    brand: "CONFIDENTIAL™",
    title: "Scaled paid ads profitably while cutting CAC by 55% in 90 days.",
  },
];

export default function CaseStudiesPage() {
  const cardsRef = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    /* HERO */
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    /* CARDS */
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 120,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });

      // IMAGE PARALLAX
      gsap.from(imageRefs.current[i], {
        y: 80,
        scale: 1.08,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // TEXT SLIDE
      gsap.from(textRefs.current[i], {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      });
    });

    /* STATS + LAST SECTION */
    gsap.from(".fade-up", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".fade-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <main className="bg-[#0b0d14] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="
          h-[45vh]
          flex flex-col items-center justify-center
          text-center px-6
          bg-gradient-to-b
          from-[#6b4025]
          via-[#2a1a12]
          to-[#0b0d14]
        "
      >
        <h1 className="hero-title text-3xl md:text-3xl font-semibold">
          Case Studies
        </h1>
        <p className="mt-4 text-white/70 text-lg">
          We let results speak for themselves.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="relative -mt-28 z-10">
        <div className="mx-auto max-w-[90rem] px-6 space-y-20 pb-32">

          {caseStudies.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                flex flex-col md:flex-row
                bg-[#1a1f2b]
                rounded-[28px]
                overflow-hidden
                min-h-[520px]
              "
            >
              {/* IMAGE */}
              <div className="md:w-1/2 h-[340px] md:h-auto bg-black overflow-hidden">
                <img
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div
                ref={(el) => (textRefs.current[i] = el)}
                className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center"
              >
                <span className="text-white/40 uppercase tracking-[0.3em] text-sm mb-6">
                  {item.brand}
                </span>

                <h3 className="text-2xl md:text-4xl leading-snug font-semibold max-w-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-32 text-center px-6 fade-container">
        <div className="fade-up mb-14 flex justify-center">
          <img src="/logo while.png" className="h-14 opacity-80" />
        </div>

        <div className="space-y-14">
          <div className="fade-up">
            <h2 className="text-5xl font-bold">$78,484,018</h2>
            <p className="text-white/50">revenue generated</p>
          </div>
          <div className="fade-up">
            <h2 className="text-5xl font-bold">$582700</h2>
            <p className="text-white/50">ad spend </p>
          </div>
          <div className="fade-up">
            <h2 className="text-5xl font-bold">1,744,018</h2>
            <p className="text-white/50">creatives produced </p>
          </div>
        </div>
      </section>

      {/* ================= LOGO → IMAGE → QUOTE ================= */}
      <section className="py-32 text-center px-6 fade-container">
    

      <img
  src="/p1.png"
  alt=""
  className="
    fade-up
    mx-auto
    rounded-xl
    mb-11
    w-full
    max-w-[320px]
    sm:max-w-[420px]
    md:max-w-[500px]
  "
/>
        <p className="fade-up max-w-2xl mx-auto text-white/80 text-lg">
          We are an <b>e-commerce agency</b> that scales established brands with
          creatives, media buying, email marketing and store optimization.
        </p>
      </section>

    </main>
  );
}
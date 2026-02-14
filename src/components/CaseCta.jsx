"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteCTA() {
  const sectionRef = useRef(null);
  const cardWrapRef = useRef(null);
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardWrapRef.current,
          start: "top 85%",
        },
      });

      gsap.to(btnRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "power1.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0f08] to-[#5a341f]" />

      {/* CARD WRAPPER */}
      <div
        ref={cardWrapRef}
        className="relative z-10 w-full flex justify-center"
      >
        {/* CARD */}
        <div
          ref={cardRef}
          className="
            w-full
            max-w-[92%] sm:max-w-xl md:max-w-3xl
            rounded-2xl sm:rounded-3xl
            border border-white/30
            bg-white/10 backdrop-blur-md
            px-6 sm:px-10 md:px-14
            py-12 sm:py-16 md:py-20
            text-center
          "
        >
          {/* TITLE */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Book-in your call.
          </h3>

          {/* DESCRIPTION */}
          <p className="
            mx-auto
            mt-4 sm:mt-6 md:mt-8
            max-w-md sm:max-w-xl
            text-sm sm:text-base
            text-white/80
            leading-relaxed
          ">
            We're boutique, we have a cap of how many clients we can take on and
            we don't know whether you'd be the right fit yet. But we'd love to
            figure out over a 30-minute call.
          </p>

          {/* BUTTON */}
          <a
            ref={btnRef}
            href="https://calendly.com/wearewebsitedesigners/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8 sm:mt-10 md:mt-12
              inline-flex items-center justify-center
              rounded-xl sm:rounded-2xl
              bg-[#ff4d4d]
              px-8 py-4 sm:px-12 sm:py-5
              text-sm sm:text-base
              font-semibold text-white
              shadow-2xl
            "
          >
            Book Your Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
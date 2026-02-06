"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TrustedBrands() {
  const trackRef = useRef(null);

  const logos = [
    "/Audien.png",
    "/hike.png",
    "/Snow.png",
    "/dore.png",
    "/rosabella.png",
    "/serene.png",
    "/rejuvaknee.png",
    "/heyshape.png",
    "/polar.png",
    "/hears.png",
    "/preimers.png",
    "/spacegoods.png",
    "/audien_6.png",
    "/audien_8.png",
    "/last1.png",
    "/last2.png",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-black py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADING */}
        <div className="mb-12 flex items-center justify-center gap-6 text-white/70">
          <span className="h-px w-24 bg-white" />
          <h3 className="text-4xl uppercase tracking-wider">
            Join Brands That Grow
          </h3>
          <span className="h-px w-24 bg-white" />
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-6"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center
              min-w-[260px] h-[90px]
              rounded-xl border border-white/10
              bg-white/[0.03] backdrop-blur"
            >
              <img
                src={logo}
                alt="Brand logo"
                className="h-8 opacity-80 grayscale transition
                hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
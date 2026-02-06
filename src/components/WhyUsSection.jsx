"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Database,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // 🔹 Cards animation (premium stagger)
      gsap.fromTo(
        cardsRef.current,
        {
          y: 40,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: {
            each: 0.15,
            from: "start",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      icon: Users,
      title: "People who've spent $700k/day on Meta",
      desc:
        "Unlike other agencies, we build and scale our own eCom brands. That real spend gives us insights and economics that attract A-class talent.",
    },
    {
      icon: TrendingUp,
      title: "Constant growth by team",
      desc:
        "We invest in internal education, playbooks, and consulting so every team member compounds results month over month.",
    },
    {
      icon: CheckCircle,
      title: "Full-stack marketing team",
      desc:
        "Creatives, CRO, media buying, email, strategy & UGC — everything under one roof.",
    },
    {
      icon: Briefcase,
      title: "CMOs who solve real problems",
      desc:
        "Your dedicated CMO connects every department with one goal: scalable growth.",
    },
    {
      icon: Database,
      title: "Data pools that don’t lie",
      desc:
        "Broad client data lets us detect patterns early and scale what actually works.",
    },
    {
      icon: Rocket,
      title: "Built & scaled our own brands",
      desc:
        "We put our own money on the line. 5+ brands built and scaled — execution first.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-32 px-6 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a] via-black to-[#5b1d0c]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <h2
          ref={headingRef}
          className="mb-20 text-center text-[34px] font-semibold md:text-[44px]"
        >
          Why{" "}
          <span className="text-[#ef4444]">
            Wearewebsitedesigner
          </span>{" "}
          Would Be The Perfect Fit
        </h2>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur transition hover:border-[#ef4444]/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 group-hover:border-[#ef4444]/50">
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="mb-2 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
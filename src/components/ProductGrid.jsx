// FOR best Sellers pages

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const products = [
  {
    title: "Kandy Statics Pack | 1000 Canva Templates",
    image: "/products/p1.png",
    tag: "CREATIVES",
    price: "$37.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Ultimate Health & Beauty Bundle",
    image: "/products/p2.png",
    tag: "CREATIVES",
    price: "$37.00",
    off: "44% OFF",
    link: "#",
  },
];

export default function ProductGrid() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="block rounded-2xl border border-white/15 bg-[#0b0f1a]
                       hover:scale-[1.02] transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-contain p-4"
            />

            <div className="px-4 pb-5 text-white">
              <span className="inline-block mb-2 rounded-full bg-pink-500 px-3 py-1 text-xs">
                {item.tag}
              </span>

              <h3 className="text-sm font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 text-sm">
                <span className="font-semibold">{item.price}</span>{" "}
                <span className="text-red-400 ml-1">{item.off}</span>
              </p>

              <button className="mt-4 w-full rounded-lg bg-red-500 py-2 text-sm font-semibold">
                Add To Cart
              </button>

              <button className="mt-2 w-full rounded-lg border border-white/20 py-2 text-sm">
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
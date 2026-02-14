"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const products = [
  {
    title: "Kandy Statics Pack | 1000 Canva & Figma Templates",
    image: "/product1.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Ultimate Health & Beauty Bundle | 500 Templates",
    image: "/product2.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "New Customer Acquisition Playbook",
    image: "/product3.png",
    tag: "ECOMMERCE",
    price: "$37.00",
    oldPrice: "$52.00",
    off: "28% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CRO",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "COPY",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "ECOMMERCE",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "ECOMMERCE",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "COPY",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "ECOMMERCE",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "COPY",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
  {
    title: "Kandy Statics Pack | 100 Canva Templates for Business",
    image: "/product4.png",
    tag: "CREATIVES",
    price: "$37.00",
    oldPrice: "$67.00",
    off: "44% OFF",
    link: "#",
  },
];

// TAG COLORS (unchanged)
const tagColors = {
  CREATIVES: "bg-pink-500",
  ECOMMERCE: "bg-green-500",
  COPY: "bg-yellow-400 text-black",
  CRO: "bg-cyan-400 text-black",
};

export default function ProductGrid() {
  const cardsRef = useRef([]);
  const [activeTags, setActiveTags] = useState([]);

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

  // 🔥 LISTEN TO HERO FILTER EVENTS
  useEffect(() => {
    const handler = (e) => {
      const { value, checked } = e.detail;
      setActiveTags((prev) =>
        checked ? [...prev, value] : prev.filter((v) => v !== value)
      );
    };

    window.addEventListener("FILTER_CHANGE", handler);
    return () => window.removeEventListener("FILTER_CHANGE", handler);
  }, []);

  // 🔥 FILTER LOGIC ONLY
  const filteredProducts =
    activeTags.length === 0
      ? products
      : products.filter((p) => activeTags.includes(p.tag));

  return (
    <section className="relative bg-black py-24">
      <div
        className="mx-auto max-w-7xl px-4 grid
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="relative rounded-2xl border border-white/20 bg-[#0b0f1a]
                       hover:scale-[1.03] transition duration-300"
          >
            {/* TAG */}
            <span
              className={`absolute -top-4 left-1/2 -translate-x-1/2
              rounded-full px-7 py-1 text-xs font-semibold tracking-wide
              ${tagColors[item.tag]}`}
            >
              {item.tag}
            </span>

            {/* IMAGE */}
            <div className="pt-10">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-48 object-contain p-4"
              />
            </div>

            {/* CONTENT */}
            <div className="px-5 pb-6 text-white text-center">
              <div className="flex justify-center mb-2 text-green-400 text-sm">
                ★★★★★ <span className="text-white/70 ml-2">Rated Excellent</span>
              </div>

              <h3 className="text-sm font-semibold leading-snug min-h-[40px]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm">
                <span className="line-through text-white/40 mr-2">
                  {item.oldPrice}
                </span>
                <span className="font-semibold">{item.price}</span>
                <span className="ml-2 text-red-400 font-semibold">
                  {item.off}
                </span>
              </p>

              <p className="mt-3 text-xs text-white/60 cursor-pointer">
                Click to read more →
              </p>

              <button className="mt-4 w-full rounded-xl bg-red-500 py-3 text-sm font-semibold hover:bg-red-600 transition">
                Add To Cart
              </button>

              <button className="mt-3 w-full rounded-xl border border-white/30 py-3 text-sm hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
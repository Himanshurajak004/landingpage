"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(false);

  // Navbar scroll background animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { background: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
      {
        background:
          "linear-gradient(90deg, rgba(26,14,8,0.9), rgba(140,75,35,0.95), rgba(26,14,8,0.9))",
        backdropFilter: "blur(14px)",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
        scrollTrigger: {
          trigger: document.body,
          start: "top -80",
          toggleActions: "play reverse play reverse",
        },
        duration: 0.25,
        ease: "power2.out",
      }
    );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      menuRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.45,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, [open]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex h-16 items-center justify-between">

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white z-50 select-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* MOBILE LOGO */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 md:hidden"
            >
              <img
                src="/logo while.png"
                alt="We Are Website Designers"
                className="h-8 object-contain"
              />
            </Link>

            {/* DESKTOP LOGO */}
            <Link href="/" className="hidden md:flex items-center gap-3">
              <img
                src="/logo while.png"
                alt="We Are Website Designers"
                className="h-9 object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-8 text-sm text-white/90 font-medium">
              <li>
                <a
                  href="https://kandyforscale.com/collections/best-sellers"
                  className="hover:text-white transition"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="https://kandyforscale.com/pages/services-list"
                  className="hover:text-white transition"
                >
                  Done For You
                </a>
              </li>
              <li>
                <a
                  href="https://kandyforscale.com/pages/case-studies"
                  className="hover:text-white transition"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://kandyforscale.com/pages/portfolio"
                  className="hover:text-white transition"
                >
                  Creative Portfolio
                </a>
              </li>
            </ul>

            {/* ICONS */}
            <div className="flex items-center gap-4 text-white">
              <Search size={18} />
              <User size={18} />
              <ShoppingBag size={18} />
            </div>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU (NAVBAR KE NICHE) ===== */}
      {open && (
        <div
          ref={menuRef}
          className="
            fixed top-16 left-0 right-0 bottom-0
            z-40 md:hidden
            bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.12),transparent_60%),linear-gradient(180deg,#050b1a,#000000)]
            backdrop-blur-xl
          "
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
            {[
              ["Best Sellers", "https://kandyforscale.com/collections/best-sellers"],
              ["Done For You", "https://kandyforscale.com/pages/services-list"],
              ["Case Studies", "https://kandyforscale.com/pages/case-studies"],
              ["Creative Portfolio", "https://kandyforscale.com/pages/portfolio"],
            ].map(([label, link], i) => (
              <li
                key={label}
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <a
                  href={link}
                  onClick={() => setOpen(false)}
                  className="
                    hover:text-[#ef4444]
                    active:scale-95
                    transition
                    tracking-wide
                    outline-none
                    focus:outline-none
                    active:outline-none
                    select-none
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
"use client";

import { Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#ef4444]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="text-white text-2xl font-semibold tracking-wide">
            <span className="font-[cursive] italic">Kandy</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-sm text-white font-medium">
            <li className="cursor-pointer hover:opacity-80">Best Sellers</li>
            <li className="cursor-pointer hover:opacity-80">Done For You</li>
            <li className="cursor-pointer hover:opacity-80">Case Studies</li>
            <li className="cursor-pointer hover:opacity-80">
              Creative Portfolio
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5 text-white">
            <Search size={18} />
            <User size={18} />
            <ShoppingBag size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
}

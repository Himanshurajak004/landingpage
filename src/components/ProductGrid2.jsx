"use client";

import Link from "next/link";

export default function KandyServicesCards() {
  return (
    <section className="w-full bg-[#0b0d14] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <span className="absolute -top-3 left-6 rounded-full bg-[#3bd671] px-3 py-1 text-xs font-semibold text-black">
              ECOMMERCE
            </span>

            <img
              src="/Product2.png"
              alt="Kandy Full Stack Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Full Stack Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              Content creation, media buying, strategy, email marketing, CRO &
              development.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LE"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <span className="absolute
             -top-3 left-6 rounded-full bg-[#ff77c8] px-3 py-1 text-xs font-semibold text-black">
              CREATIVES
            </span>

            <img
              src="/product1.png"
              alt="Kandy Content Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Content Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              We take care of your monthly ad content – videos, designs, & copy
              from A to Z.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LEARN_MORE_LINK"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <div className="absolute -top-3 left-6 flex gap-2">
              <span className="rounded-full bg-[#ffd84d] px-3 py-1 text-xs font-semibold text-black">
                EMAILS
              </span>
              <span className="rounded-full bg-[#4ddfff] px-3 py-1 text-xs font-semibold text-black">
                CRO
              </span>
            </div>

            <img
              src="/Product2.png"
              alt="Kandy Email & CRO Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Email & CRO Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              CRO & email marketing – sorted. Flows, campaigns, design, CRO,
              A/B testing, development & more.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LEARN_MORE_LINK"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

          {/* CARD 4 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <div className="absolute -top-3 left-6 flex gap-2">
              <span className="rounded-full
               bg-[#ff77c8] px-3 py-1 text-xs font-semibold text-black">
                CREATIVES
              </span>
              <span className="rounded-full bg-[#b44dff] px-3 py-1 text-xs font-semibold text-black">
                MEDIA BUYING
              </span>
            </div>

            <img
              src="/Product1.png"
              alt="Kandy Content & Media Buying Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Content & Media Buying Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              Scaling with creatives and videos has never been this easy.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LEARN_MORE_LINK"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

          
          {/* CARD 5 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <span className="absolute
             -top-3 left-6 rounded-full bg-[#f0ab0b] px-3 py-1 text-xs font-semibold text-black">
              EMAILS
            </span>

            <img
              src="/p5.png"
              alt="Kandy Content Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Content Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              We take care of your monthly ad content – videos, designs, & copy
              from A to Z.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LEARN_MORE_LINK"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

          
          {/* CARD 6 */}
          <div className="relative rounded-2xl border border-white/20 bg-[#0f1118] p-6 text-white">
            <span className="absolute
             -top-3 left-6 rounded-full bg-[#1da9b9] px-3 py-1 text-xs font-semibold text-black">
              CRO
            </span>

            <img
              src="/product1.png"
              alt="Kandy Content Services"
              className="mb-6 w-full object-contain"
            />

            <h3 className="mb-2 text-lg font-semibold">
              Kandy Content Services
            </h3>

            <p className="mb-6 text-sm text-white/80">
              We take care of your monthly ad content – videos, designs, & copy
              from A to Z.
            </p>

            <Link
              href="#BOOK_CALL_LINK"
              className="mb-3 block w-full rounded-lg bg-[#ff4d4d] py-3 text-center font-semibold text-white"
            >
              Book Your Call
            </Link>

            <Link
              href="#LEARN_MORE_LINK"
              className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
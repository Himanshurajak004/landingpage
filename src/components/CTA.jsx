"use client";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a0a0a] via-[#8b1c1c] to-[#ef4444]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        
        {/* Avatar */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2">
          <img
            src="https://i.imgur.com/2yaf2wb.png"
            alt="avatar"
            className="h-32 w-32 rounded-full shadow-xl"
          />
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/30 bg-white/10 px-10 py-20 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-white">
            Book-in your call.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90">
            We're boutique, we have a cap of how many clients we can take on
            and we don't know whether you'd be the right fit yet. But we'd love
            to figure out over a 30-minute call.
          </p>

          <button className="mt-10 rounded-xl bg-[#ff4d4d] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#ff3b3b]">
            Book Your Discovery Call →
          </button>
        </div>
      </div>
    </section>
  );
}

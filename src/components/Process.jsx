"use client";

export default function Process() {
  return (
    <section className="bg-black py-32 relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            No Magic, Only Data and Processes
            <br />
            That <span className="text-red-500">Scaled Brands Like Yours</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Managing tens of millions of dollars of adspend lets us minimize
            your risks and develop unbeatable processes.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-24 grid gap-10 md:grid-cols-3">
          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/20" />

          {/* Card 1 */}
          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/5 p-10 backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white mb-6">
              1
            </span>
            <h3 className="text-xl font-semibold text-white mb-4">
              We Research, Deep
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Minimize risk by leaning into your customer, market, unique
              product mechanism and huge amounts of historical data points.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/5 p-10 backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white mb-6">
              2
            </span>
            <h3 className="text-xl font-semibold text-white mb-4">
              We Build, Fast.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              100s of proven-to-work ads, custom funnels, unbeatable offers,
              consistent emails and strategy under one efficient roof.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative z-10 rounded-2xl border border-white/20 bg-white/5 p-10 backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white mb-6">
              3
            </span>
            <h3 className="text-xl font-semibold text-white mb-4">
              We Test, A Lot.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              It takes us 3 days to test and rebuild creatives.
              <br />We move.
            </p>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <img
            src="https://dummyimage.com/600x200/111/fff&text=Brand+One"
            className="rounded-xl opacity-80"
          />
          <img
            src="https://dummyimage.com/600x200/111/fff&text=Brand+Two"
            className="rounded-xl opacity-80"
          />
          <div className="relative">
            <img
              src="https://dummyimage.com/600x200/111/fff&text=Brand+Three"
              className="rounded-xl opacity-80"
            />
            <span className="absolute top-4 right-4 rounded-full bg-blue-500 px-4 py-1 text-sm text-white">
              Our Own Brand
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

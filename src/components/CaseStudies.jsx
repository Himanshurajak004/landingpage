"use client";

export default function CaseStudies() {
  const cases = [
    {
      brand: "DTC Beauty Brand",
      stat: "3.2x ROAS",
      desc: "Scaled profitably with paid ads + creative testing.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop",
    },
    {
      brand: "eCom Apparel",
      stat: "$1.4M Revenue",
      desc: "Full-funnel growth with CRO & performance marketing.",
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop",
    },
    {
      brand: "DTC Wellness",
      stat: "2.7x Growth",
      desc: "Email + paid ads engine built from scratch.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-20 text-center text-4xl md:text-5xl font-bold text-white">
          Case Studies
        </h2>

        {/* Cards */}
        <div className="grid gap-16 md:grid-cols-3">
          {cases.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.brand}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 z-10 p-8">
                <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white">
                  {item.brand}
                </span>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {item.stat}
                </h3>

                <p className="mt-2 max-w-xs text-sm text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

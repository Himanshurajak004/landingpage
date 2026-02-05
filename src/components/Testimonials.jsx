export default function Results() {
  const results = [
    {
      quote:
        "Kandy helped us scale our revenue by 3x in just 6 months.",
      author: "Startup Founder",
    },
    {
      quote:
        "Their performance marketing strategy completely changed our growth.",
      author: "Marketing Head",
    },
    {
      quote:
        "Clean execution, clear insights, and real results.",
      author: "SaaS Company",
    },
  ];

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-white">
          Results That <span className="text-[#ef4444]">Speak</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {results.map((r, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#ef4444]/40 hover:shadow-[0_0_45px_rgba(239,68,68,0.18)]"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,#ef444430,transparent_65%)]" />

              <div className="relative z-10">
                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  “{r.quote}”
                </p>

                <span className="text-sm font-medium text-[#ef4444]">
                  — {r.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

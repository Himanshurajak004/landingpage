"use client";

export default function CreativeTeam() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Imagine Having A Full-Stack Creative Team.
            <br />
            <span className="text-red-500">
              But without all the drawbacks.
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 items-center">
          {/* Left Card */}
          <div className="rounded-2xl bg-white/5 p-10 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-semibold text-white">
              Videos, Designs, Copy.
              <br />
              Zero time from you, all the results from us.
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Kandy tests creatives, analyzes results, brainstorms ideas,
              scripts videos, shoots models, finds locations, edits footage —
              all in one package.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
              alt="Creative team"
              className="rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

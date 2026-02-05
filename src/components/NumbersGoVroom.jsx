export default function NumbersGoVroom() {
  return (
    <section className="bg-black py-32 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          We’re Here To Make Numbers Go Vroom
        </h2>
        <p className="text-white/60">
          Everything else is secondary, tbh
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="max-w-6xl mx-auto bg-[#0f0f0f] rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="rounded-xl p-6 text-white
            bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                💰
              </span>
              <p className="text-sm opacity-90">
                revenue generated for clients since 2023
              </p>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">
              $923,009,494
            </h3>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6 text-white
            bg-gradient-to-r from-sky-400 to-emerald-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                🚀
              </span>
              <p className="text-sm opacity-90">
                record revenue from a single creative
              </p>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">
              $3,145,382
            </h3>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-6 text-white
            bg-gradient-to-r from-rose-500 to-indigo-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                🎨
              </span>
              <p className="text-sm opacity-90">
                creatives produced since 2023
              </p>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">
              281,401+
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
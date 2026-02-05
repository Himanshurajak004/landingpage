export default function Testimonial() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* subtle top red line */}
      <div className="" />

      {/* green glow */}
      <div className="absolute w-[600px] h-[300px] rounded-full 
        bg-[radial-gradient(circle,rgba(0,255,120,0.25),transparent_70%)]
        blur-[100px]" />

      {/* content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">

        {/* quote */}
        <div className="text-7xl mb-6 font-serif">“</div>

        {/* main text */}
        <p className="text-2xl md:text-3xl font-semibold leading-snug mb-12">
          Went from zero to almost 8 figures with these guys in
          <br className="hidden md:block" />
          Almost 1.5 years. They know how to actually scale.
        </p>

        {/* footer */}
        <p className="text-sm text-white/60 mb-2">
          Owner of PrimalHerbs
        </p>
        <p className="text-lg font-bold tracking-wide">
          PRIMALHERBS®
        </p>
      </div>
    </section>
  );
}
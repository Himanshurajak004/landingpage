import Image from "next/image";

export default function Quote2() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      
      <div className="" />

    
      <div
        className="absolute w-[700px] h-[300px] rounded-full
        bg-[radial-gradient(circle,rgba(255,60,60,0.25),transparent_70%)]
        blur-[120px]"
      />

      {/* content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">

        {/* quote */}
        <div className="text-7xl mb-6 font-serif">“</div>

        {/* main text */}
        <p className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
          The most efficient marketing machine.
          <br />
          They learn quickly &amp; execute like a rocket.
        </p>

        {/* author */}
        <p className="text-sm text-white/70 mb-6">
          Ran Halbershtain – VP of Marketing at Livia
        </p>

        {/* brand */}
        <div className="flex items-center justify-center gap-3 opacity-90">
          <img
            src="https://kandyforscale.com/cdn/shop/files/image_5.png?v=1746465414&width=256"
            alt=""
            width={170}
            height={170}
            className="object-contain"
          />
          <span className="text-xl font-semibold"></span>
        </div>
      </div>
    </section>
  );
}
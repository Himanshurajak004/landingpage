import Image from "next/image";

const items = [
  {
    title: "Strategy, Handled",
    desc: "Your dedicated CMO who's driven by problem solving while connecting the dots between departments.",
    side: "right",
    glow: "bg-emerald-400/30",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Media Buying, Optimized",
    desc: "A numbers game based on creatives. Seamless processes for communication between creatives and ad buyers.",
    side: "left",
    glow: "bg-blue-400/30",
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
  },
  {
    title: "Creatives, Produced",
    desc: "Forget scripting, briefing, management, approvals. We take care of everything.",
    side: "right",
    glow: "bg-yellow-400/30",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
  },
  {
    title: "Email Marketing, Sorted",
    desc: "Email strategy, automations, campaigns, copy & design — all focused on revenue.",
    side: "left",
    glow: "bg-green-400/30",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
  },
  {
    title: "Landing Pages, Built",
    desc: "Mobile optimized, A/B tested landing & product pages. Done for you.",
    side: "right",
    glow: "bg-purple-400/30",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function FullCirclePerformance() {
  return (
    <section className="bg-black py-32 px-6">
      {/* Header */}
      <div className="text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Full Circle Performance
        </h2>
        <p className="text-white/60">
          From creatives to emails.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

        <div className="space-y-40">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center ${
                item.side === "left"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20">
                <div className={`w-4 h-4 rounded-full ${item.glow}`} />
              </div>

              {/* content */}
              <div
                className={`w-full md:w-[45%] ${
                  item.side === "left"
                    ? "text-right pr-10"
                    : "text-left pl-10"
                }`}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70 max-w-md mb-6">
                  {item.desc}
                </p>

                {/* image */}
                <div className="relative rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
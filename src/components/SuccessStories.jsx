import Image from "next/image";

const stories = [
  {
    brand: "BRAINLUXURY",
    text: "From spending $45k/month to $250k/month while lowering nCAC by 60–70% in 60 days.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    brand: "PRIMALHERBS®",
    text: "From $0 to $670k/month in 14 months for a US supplement brand.",
    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  },
  {
    brand: "RedDrop",
    text: "From $35k/month to $211k/month in 2 months.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
  },
  {
    brand: "Human Pro",
    text: "From $10k/month to $100k/month in less than 10 months.",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
  },
  {
    brand: "HASHIBO",
    text: "From $10k/month to $1.3M/month in 10 months.",
    img: "https://images.unsplash.com/photo-1761839257870-06874bda71b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    brand: "TIMEPIECE",
    text: "From $50k/month to $500k/month in 8 months.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    brand: "Noreo",
    text: "$0 to $540k/month at 35% net profit in less than 6 months.",
    img: "https://images.unsplash.com/photo-1761839257165-44f08ed617c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    brand: "Jesswein",
    text: "Helped Jesswein hit $3M/day in revenue with creatives.",
    img: "https://plus.unsplash.com/premium_photo-1769005373138-9a4f2771a4cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    brand: "Livia",
    text: "Increased their ad spend 3× while lowering nCAC by 75%.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-black py-24 px-6">
      {/* heading */}
      <div className="text-center mb-16">
        <h2 className="text-red-500 font-semibold text-3xl   tracking-wide mb-2">
          Success Stories
        </h2>
        <p className="text-white/60 text-sm">
          We let results speak for themselves.
        </p>
      </div>

      {/* grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-[#0d0d0d] overflow-hidden border border-white/5 hover:border-red-500/40 transition"
          >
            {/* image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.brand}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* content */}
            <div className="p-5">
              <p className="text-xs text-white/40 mb-2 uppercase">
                {item.brand}
              </p>
              <p className="text-white text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
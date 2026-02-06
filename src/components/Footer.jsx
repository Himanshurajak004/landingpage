export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ef4444] via-[#8b1c1c] to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
        {/* Top Row */}
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <img
              src="/logo while.png"
              alt="Wearewebsitedesigner Logo"
              className="h-10 w-auto"
            />

            <p className="mt-4 max-w-xs text-sm text-white/80 leading-relaxed">
              Boutique full-stack growth partner for eCom brands looking to scale
              to 8–9 figures.
            </p>
          </div>

          {/* Explore */}
          {/* 🔹 EXPLORE – CLICKABLE */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Best Sellers", link: "https://kandyforscale.com/collections/best-sellers" },
                { name: "Done For You", link: "https://kandyforscale.com/pages/services-list" },
                { name: "Case Studies", link: "https://kandyforscale.com/pages/case-studies" },
                { name: "Creative Portfolio", link: "https://kandyforscale.com/pages/portfolio" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link} // 👈 yahan tu apna real link dalega
                    className="inline-block text-white/80 transition hover:text-white hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES – CLICKABLE */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Meta Ads Agency", link: "https://www.pixelshark.agency/meta-ads.php" },
                { name: "Google Ads Agency", link: "https://www.pixelshark.agency/google-ads.php" },
                { name: "IT & Software", link: "http://localhost:3000/it-software" },
                { name: "E-Commerce Marketing", link: "/ecommerce-marketing" },
                { name: "CRM", link: "/crm" },
                { name: "Zoho One", link: "/zoho-one" },
                { name: "Custom CRM Development", link: "/custom-crm" },
                { name: "Freshworks CRM", link: "/freshworks-crm" },
                { name: "HubSpot CRM", link: "/hubspot-crm" },
                { name: "Marketplace Management", link: "/marketplace-management" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.link} // 👈 yahan tu apna link daalega
                    className="text-white/80 transition hover:text-white hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Let’s Talk</h4>
            <p className="mb-4 text-sm text-white/80">
              Book a 30-minute discovery call with our team.
            </p>

            <a
              href="https://calendly.com/wearewebsitedesigners/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-white/90"
            >
              Book Discovery Call →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} Wearewebsitedesigner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
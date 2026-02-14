export default function Footer() {
  return (
    <footer
      className="
        w-full
         bg-gradient-to-t
          from-[#4a2717]
          via-[#2a150c]
          to-[#0e0906]
        pt-24 pb-10
        text-white
      "
    >
      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* LEFT */}
          <div>
            {/* LOGO PLACEHOLDER */}
            <div className="mb-4">
              {/* Yahan apna logo laga dena */}
               <img
              src="/logo while.png"
              alt="Logo"
              className="mb-4 h-8 md:h-10"
            />
            </div>

            <p className="text-sm text-white/90 max-w-xs">
              Your brand&apos;s journey is at the heart of everything <br />
              we create
            </p>

            <p className="mt-6 text-sm text-white/90">
              Customer support:
              <br />
              <span className="font-semibold">
                support@wearewebsitedesigner.com
              </span>
            </p>
          </div>

          {/* MIDDLE (EMPTY SPACE LIKE IMAGE) */}
          <div className="hidden md:block"></div>

          {/* RIGHT */}
          <div className="md:text-right">
            <ul className="space-y-3 text-sm text-white/90">
              <li className="hover:text-white cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Refund Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer">
                Become an Affiliate
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-20 text-center text-xs text-white/70">
        © 2026 Wearewebsitedesigner. All rights reserved
      </div>
    </footer>
  );
}
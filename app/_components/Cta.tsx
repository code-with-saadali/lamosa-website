"use client";

export default function CTAFooter() {
  return (
    <section className="bg-[#f0f0ee] px-5 sm:px-8 md:px-20 py-10">
      {/* MAIN CARD WRAPPER */}
      <div className="bg-white rounded-[40px] overflow-hidden">
        {/* ================= CTA ================= */}
        <div className="flex flex-col items-center text-center p-6 sm:p-10 md:p-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight leading-[1.15]">
            Trusted by 1,200+ founders. <br />
            <span className="text-[#6B7280]">
              Turning ideas into bold brands.
            </span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-sm leading-relaxed mt-4">
            Book a free discovery call to discuss strategy, set goals, and see
            how we can help you grow.
          </p>

          <div className="flex items-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-500 font-medium">
              Open for work
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button className="flex items-center gap-4 bg-[#111827] text-white text-sm sm:text-base font-medium rounded-full pl-6 pr-2 py-2 hover:bg-[#1f2937] transition">
              Book A Call
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                →
              </span>
            </button>

            <button className="bg-white text-gray-800 text-sm sm:text-base font-medium rounded-full px-8 py-3 border border-gray-200 hover:bg-gray-50 transition">
              View Plans
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* ================= FOOTER ================= */}
        <div className="p-6 sm:p-10">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* LEFT */}
            <div>
              <p className="text-xl font-semibold mb-3">Lamosa</p>

              <p className="text-base text-gray-500 max-w-xs mb-5">
                Stay ahead with strategies uniting design, technology, and
                marketing.
              </p>

              <div className="flex items-center border border-gray-200 rounded-full pl-4 pr-1 py-1.5">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 text-sm bg-transparent outline-none"
                />
                <button className="w-9 h-9 bg-[#E03A2F] rounded-full text-white">
                  →
                </button>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex gap-16">
              <div>
                <p className="font-medium mb-3">Company</p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <a href="#">Contact</a>
                  <a href="#">About</a>
                  <a href="#">Projects</a>
                </div>
              </div>

              <div>
                <p className="font-medium mb-3">Socials</p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <a href="#">X</a>
                  <a href="#">Dribbble</a>
                  <a href="#">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="mt-10 pt-5 border-t border-gray-100 text-sm text-gray-400">
            © 2025 Lamosa. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

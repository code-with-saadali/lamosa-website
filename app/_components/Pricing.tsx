"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Product design",
    desc: "Ideal for launching or revamping a website or product to boost conversions.",
    price: "$2,200",
    period: "One time",
    features: [
      { text: "Senior designer" },
      { text: "One Active Request", info: true },
      { text: "7-10 Days delivery-time" },
      { text: "SEO optimized" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    addon: { text: "3X faster delivery", price: "+$1k" },
    dark: false,
    badge: null,
  },
  {
    name: "Design partner",
    desc: "Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.",
    price: "$4,000",
    period: "/month",
    features: [
      { text: "Dedicated team & expert designers" },
      { text: "Multiple requests under fair use", info: true },
      { text: "2-3 Days delivery-time" },
      { text: "Monthly CRO & Growth Strategy", info: true },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    addon: null,
    dark: false,
    badge: null,
  },
  {
    name: "Custom",
    desc: "Ideal for brands seeking unlimited design and motion support, delivering high-impact results without restrictions.",
    price: "$9,000+",
    period: null,
    startsAt: true,
    features: [
      { text: "Dedicated team & expert designers" },
      { text: "Unlimited requests", info: true },
      { text: "2 Days Delivery, monthly commitment" },
      { text: "Advanced SEO & Marketing" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    addon: null,
    dark: true,
    badge: "Limited spots",
  },
];

export default function Pricing() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-[#f0f0ee] px-6 py-20 md:px-20">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
        <span className="text-xs tracking-widest text-gray-500">Pricing</span>
      </div>

      <h2 className="mb-2 text-center text-4xl font-semibold leading-tight text-black md:text-4xl">
        Choose a plan.
      </h2>
      <h3 className="mb-5 text-center text-4xl font-semibold leading-[1.1] text-[#6B7280] md:text-4xl">
        That fits your needs.
      </h3>

      <p className="mb-14 max-w-sm text-center text-base font-medium leading-[1.1] text-[#404040]">
        Flexible plans designed to accelerate growth,
        <br /> with solutions that evolve as your business scales.
      </p>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
        {plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[0] }) {
  const dark = plan.dark;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`flex h-full flex-col gap-5 rounded-[46px] border ${
        dark
          ? "border-[#2a2a2a] bg-[#111111] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <div
        className={`m-2 rounded-[46px] border p-5 ${
          dark
            ? "border-[#2A2A2A] bg-[#171717]"
            : "border-[#F3F4F6] bg-[#F9FAFB] shadow-lg"
        }`}
      >
        <div
          className={`my-5 flex h-13 w-13 items-center justify-center rounded-2xl ${
            dark ? "bg-[#1F1F1F] text-gray-400" : "bg-[#F3F4F6] text-gray-500"
          }`}
        >
          □
        </div>

        <div className="mb-2 flex items-center gap-2">
          <h3
            className={`text-xl font-medium tracking-tight ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {plan.name}
          </h3>
          {plan.badge && (
            <span className="rounded-full bg-red-900 px-2.5 py-0.5 text-xs font-medium text-red-300">
              {plan.badge}
            </span>
          )}
        </div>

        <p
          className={`max-w-xs py-4 text-base leading-[1.1] ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {plan.desc}
        </p>
      </div>

      <div className="p-5">
        {plan.startsAt && (
          <p className={`mb-1 text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>
            Starts at
          </p>
        )}
        <div className="flex items-baseline gap-1.5">
          <span
            className={`text-4xl font-bold tracking-tight ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className={`text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
              {plan.period}
            </span>
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-3 p-5">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <span className={`text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
              ✦
            </span>
            <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
              {f.text}
            </span>
            {f.info && (
              <span
                className={`ml-auto flex h-4 w-4 items-center justify-center rounded-full border text-[9px] ${
                  dark
                    ? "border-[#444] text-gray-500"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                i
              </span>
            )}
          </li>
        ))}
      </ul>

      {plan.addon && (
        <div
          className={`mx-5 flex items-center justify-between rounded-xl border px-4 py-2.5 ${
            dark ? "border-[#333] bg-[#1a1a1a]" : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-yellow-500">⚡</span>
            <span
              className={`text-sm font-medium ${
                dark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {plan.addon.text}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>
              {plan.addon.price}
            </span>
            <div className="relative h-4 w-8 cursor-pointer rounded-full bg-gray-200">
              <div className="absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow-sm" />
            </div>
          </div>
        </div>
      )}

      <button
        className={`mx-5 my-5 mt-auto flex items-center justify-between rounded-full px-5 py-3.5 text-sm font-medium transition-all ${
          dark
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Get Started Now
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          →
        </span>
      </button>
    </motion.div>
  );
}

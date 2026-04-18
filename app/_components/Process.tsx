"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
  },
  {
    title: "Design & Prototyping",
    desc: "Transforming insights into bold, user-focused designs that connect and convert.",
  },
  {
    title: "Development & Launch",
    desc: "From pixel to code, we craft high-performing websites and launch them flawlessly.",
  },
  {
    title: "Growth & Optimization",
    desc: "We analyze, improve, and scale your product continuously.",
  },
];

export default function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="bg-[#f0f0ee] px-4 py-16 sm:px-5 md:px-20 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-20">
        <div className="h-fit self-start md:sticky md:top-28">
          <p className="mb-2 text-base text-[#565656] sm:text-lg">Process</p>

          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            Proven & effective process. <br />
            <span className="text-[#6B7280]">That delivers results.</span>
          </h2>

          <p className="mt-4 max-w-lg text-base text-[#5A5A5B] sm:text-lg">
            We dive deep into your goals, audience, and challenges to craft a
            strategy that drives clear direction and impact.
          </p>
        </div>

        <div className="relative pl-10 sm:pl-12">
          <div className="absolute left-3 top-0 h-full w-1 bg-gray-300 sm:left-4" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-3 top-0 w-1 origin-top bg-red-500 sm:left-4"
          />

          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-[#F0F0EE] text-xs text-black shadow-sm sm:-left-12 sm:h-9 sm:w-9 sm:text-sm">
                  {`0${i + 1}`}
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6">
                  <h3 className="text-xl font-medium tracking-tight text-[#6B7280] sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#424242] sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is included with each Framer template?",
    a: "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize.",
  },
  {
    q: "Do I need coding skills to use your templates?",
    a: "No coding skills required. Our templates are designed to be used directly in Framer with a simple drag-and-drop interface.",
  },
  {
    q: "Can I use a template for multiple projects?",
    a: "Each license covers one project. For multiple projects, you'll need to purchase additional licenses.",
  },
  {
    q: "Are the templates optimized for performance?",
    a: "Yes, all templates are built with performance in mind — clean code, optimized images, and fast load times.",
  },
  {
    q: "Do you offer support after purchase?",
    a: "Yes, we offer email support for all purchases. Premium plans include priority support and live chat.",
  },
  {
    q: "Can I integrate third-party tools with these templates?",
    a: "Absolutely. Our templates support integrations with tools like Mailchimp, Zapier, Notion, and more.",
  },
  {
    q: "Do you offer customizations beyond the template?",
    a: "Yes, we offer custom design and development services. Reach out via the contact form to discuss your needs.",
  },
  {
    q: "Will my template receive updates?",
    a: "Yes, all templates receive free updates. Major version upgrades may require a new purchase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f0f0ee] px-5 md:px-16 lg:px-20 py-20">
      <div className="grid gap-10 md:grid-cols-[minmax(300px,32%)_minmax(0,1fr)]">
        <div className="space-y-10">
          <div className="h-fit self-start md:sticky md:top-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs text-gray-500 tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Got a question?
            </h2>
            <h3 className="text-3xl font-bold text-gray-400 leading-snug">
              We&apos;ve got answers.
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="bg-white border border-gray-200 rounded-2xl px-5 cursor-pointer select-none overflow-hidden transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center justify-between py-4 gap-4">
                  <span className="text-base md:text-lg text-gray-800 font-medium">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-sm shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-base md:text-lg text-gray-500 leading-relaxed pb-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div
          className="relative rounded-2xl overflow-hidden p-6 flex flex-col gap-6"
          style={{ background: "#0f0f12" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <p className="relative text-white text-xl font-bold leading-snug z-10">
            Still have questions?
          </p>
          <button className="relative z-10 self-start flex items-center gap-2 bg-white text-black text-sm font-medium rounded-full px-5 py-2.5 hover:bg-gray-100 transition">
            Contact Us
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

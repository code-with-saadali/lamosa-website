import React from "react";
import { FiUser } from "react-icons/fi";
import { RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    title: "2.3x",
    subtitle: "increase in lead conversion",
    text: "Lamosa turned our website into a real sales tool. The new experience feels premium, loads fast, and guides visitors exactly where we want them to go.",
    name: "Sarah Coleman",
    role: "CMO",
  },
  {
    id: 2,
    title: "41%",
    subtitle: "more qualified inbound leads",
    text: "From strategy to execution, the process felt sharp and effortless. Every design decision had a purpose, and the final result gave our brand far more credibility.",
    name: "Daniel Brooks",
    role: "Founder",
  },
  {
    id: 3,
    title: "58%",
    subtitle: "lift in engagement time",
    text: "We finally have a site that matches the quality of our service. Clients mention the website on discovery calls all the time, which never happened before.",
    name: "Maya Bennett",
    role: "Managing Director",
  },
  {
    id: 4,
    title: "3.1x",
    subtitle: "growth in booked calls",
    text: "The team understood our positioning immediately and translated it into a clean, confident digital presence. It feels custom, thoughtful, and built to perform.",
    name: "Ethan Parker",
    role: "CEO",
  },
  {
    id: 5,
    title: "67%",
    subtitle: "increase in user retention",
    text: "Lamosa gave us more than a redesign. They gave us clarity, structure, and a website that finally supports the next stage of our growth.",
    name: "Olivia Turner",
    role: "Head of Brand",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#f0f0ee] px-4 py-10 sm:px-5 md:px-20">
      <div className="text">
        <h1 className="flex items-center justify-center gap-2 text-base text-[#404040] sm:text-lg">
          <span className="h-2 w-2 rounded-full bg-[#E1443A]"></span>
          Testimonials
        </h1>

        <h1 className="mt-4 text-center text-3xl font-semibold text-black sm:text-4xl">
          We&apos;re loved. <br />
          <span className="text-[#6B7280]">Just success stories.</span>
        </h1>
      </div>

      <div className="box mt-10 flex flex-col gap-4 rounded-4xl bg-white p-4 sm:gap-5 sm:rounded-[46px] sm:p-5 md:flex-row md:items-stretch md:justify-between">
        <div className="flex w-full flex-col gap-4 sm:gap-5 md:w-[50%]">
          {testimonials.slice(0, 2).map((item, index) => (
            <div
              key={item.id}
              className={`flex min-h-80 flex-col rounded-4xl border border-[#F1F2F4] bg-white p-4 shadow-xl sm:min-h-105 sm:rounded-[46px] sm:p-5 ${
                index === 0 ? "" : "flex-1"
              }`}
            >
              <h1 className="text-xl font-semibold text-black sm:text-2xl">{item.title}</h1>

              <p className="py-2 text-base font-medium text-[#6B7280] sm:text-lg">
                {item.subtitle}
              </p>

              <span className="text-5xl text-[#E1443A] sm:text-6xl">&quot;</span>

              <p className="max-w-xl text-sm font-medium leading-tight text-[#4B4B4B] sm:text-base sm:leading-[1.1]">
                {item.text}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-8 sm:gap-4 sm:pt-10">
                <div className="flex gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <h1 className="text-lg text-[#4B4B4B] sm:text-xl">{item.name}</h1>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
                <RiDoubleQuotesR className="shrink-0 text-3xl text-[#E1443A]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-4 sm:gap-5 md:w-[50%]">
          {testimonials.slice(2, 4).map((item) => (
            <div
              key={item.id}
              className="flex min-h-80 flex-1 flex-col rounded-4xl border border-[#F1F2F4] bg-white p-4 shadow-xl sm:rounded-[46px] sm:p-5"
            >
              <h1 className="text-xl font-semibold text-black sm:text-2xl">{item.title}</h1>

              <p className="py-2 text-base font-medium text-[#6B7280] sm:text-lg">
                {item.subtitle}
              </p>

              <span className="py-4 text-5xl text-[#E1443A] sm:py-5 sm:text-6xl"></span>

              <p className="max-w-xl text-sm font-medium leading-tight text-[#4B4B4B] sm:text-base sm:leading-[1.1]">
                {item.text}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-8 sm:gap-4 sm:pt-10">
                <div className="flex gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <h1 className="text-lg text-[#4B4B4B] sm:text-xl">{item.name}</h1>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
                <RiDoubleQuotesR className="shrink-0 text-3xl text-[#E1443A]" />
              </div>
            </div>
          ))}

          <div className="relative flex min-h-65 flex-1 flex-col overflow-hidden rounded-4xl bg-[#0B1220] p-5 text-white sm:rounded-[46px] sm:p-6">
            <div className="absolute inset-0 z-0">
              <div
                className="h-full w-full opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>

            <p className="relative z-10 text-base sm:text-lg">You focus on your company.</p>
            <p className="relative z-10 text-sm text-gray-400 sm:text-base">We make it happen.</p>

            <h1 className="relative z-10 mt-2 text-lg font-semibold sm:text-xl">
              Unstoppable Growth.
            </h1>

            <button className="relative z-10 mt-auto w-fit rounded-full bg-white px-5 py-2 text-sm text-black">
              Book A Call {"->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

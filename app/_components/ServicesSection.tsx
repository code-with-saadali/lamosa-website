'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FiMonitor, FiCode, FiLayers, FiPenTool } from 'react-icons/fi'
import { BiChevronDown } from 'react-icons/bi'

export default function ServicesSection() {
  const [active, setActive] = useState(0)

  const services = [
  {
    title: 'Web Design & UX/UI',
    desc: 'We design sleek, user-focused interfaces in Figma that not only look stunning but also deliver seamless user experiences. Every layout is crafted to boost engagement, improve usability, and drive meaningful conversions.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200',
    icon: <FiMonitor />,
  },
  {
    title: 'No-code Development',
    desc: 'We build fast, scalable, and fully responsive websites using modern no-code tools like Webflow and Framer. This allows you to launch quicker, iterate faster, and maintain flexibility without compromising performance.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200',
    icon: <FiCode />,
  },
  {
    title: 'MVP prototyping',
    desc: 'We help you transform ideas into functional prototypes quickly, allowing you to validate concepts, gather real user feedback, and iterate efficiently before full-scale development.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200',
    icon: <FiLayers />,
  },
  {
    title: 'Ongoing Design Partner',
    desc: 'We act as your dedicated design partner, providing continuous support, improvements, and new ideas to help your product evolve, stay competitive, and scale with confidence.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200',
    icon: <FiPenTool />,
  },
]

  return (
    <section className="bg-[#f0f0ee] py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
              <span className="text-gray-500 text-sm font-medium">Services</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              From idea to scale.
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mt-2">
              We master our craft.
            </h2>
          </div>

          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition">
            Start A Project
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
              →
            </span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-4">
            {services.map((item, index) => {
              const isOpen = active === index

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer transition hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 text-lg">
                        {item.icon}
                      </div>

                      <h3 className="text-2xl font-medium text-gray-800">
                        {item.title}
                      </h3>
                    </div>

                    <BiChevronDown
                      className={`transition-transform text-xl duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* SMOOTH COLLAPSE ANIMATION */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="bg-gray-50 rounded-xl p-4 font text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white shadow-lg">
            <Image
              key={services[active].image}
              src={services[active].image}
              alt="service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

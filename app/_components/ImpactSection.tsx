'use client'
import React from 'react'

export default function ImpactSection() {

  const cards = [
    {
      id: 1,
      number: '500+',
      title: 'Successful projects delivered',
      desc: 'We build high-impact websites and digital experiences for startups and enterprises to scale fast',
    },
    {
      id: 2,
      number: '240%',
      title: 'Increased in conversion rate',
      desc: 'Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.',
    },
    {
      id: 3,
      number: '$100M+',
      title: 'Seed + series A funding',
      desc: "Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster.",
    },
  ]

  return (
    <section className="bg-[#f0f0ee] py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
            <span className="text-gray-500 text-sm font-medium">Impact</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
            Lamosa makes it simple, <br />
            <span className="text-[#6B7280]">and delivers results.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-4xl font-bold text-gray-900">
                {card.number}
              </h3>

              <p className="text-[#6E7582] mt-2 text-xl font-medium">
                {card.title}
              </p>

              <p className="text-gray-500 mt-6 text-lg leading-tight">
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

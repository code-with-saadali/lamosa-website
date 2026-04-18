"use client";

import Image from "next/image";
import React from "react";

export default function Marquee() {
  const brands = [
    {
      id: "acme",
      name: "Acme",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop",
    },
    {
      id: "quantum",
      name: "Quantum",
      logo: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=200&h=200&fit=crop",
    },
    {
      id: "apex",
      name: "Apex",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
    },
    {
      id: "nova",
      name: "Nova",
      logo: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#f0f0ee] px-4 py-6 sm:px-5 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">
        <span className="w-full text-center text-base font-medium tracking-tighter text-gray-800 sm:text-lg md:w-[36%] md:text-left md:text-3xl">
          Trusted by top founders.
        </span>

        <div className="w-full overflow-hidden md:w-[64%]">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap sm:gap-10 md:gap-16">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex items-center gap-2 text-gray-600 opacity-70 transition hover:opacity-100"
              >
                <div className="relative h-6 w-6 overflow-hidden rounded-full sm:h-7 sm:w-7">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="text-sm sm:text-base">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

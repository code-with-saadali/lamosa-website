"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const leftCards = [
  {
    quote: "helped me go live in days, not weeks-highly recommend.",
    author: "- Marcus T",
  },
  {
    quote: "The updates and attention to detail are unmatched.",
    author: "- Nora S",
  },
  {
    quote: "Saved me weeks of work, and the result looks professional.",
    author: "- Leo M",
  },
  {
    quote: "Best investment for my startup launch, period.",
    author: "- Priya K",
  },
  {
    quote: "Clean code and stunning design-loved every bit of it.",
    author: "- Sam W",
  },
];

const rightCards = [
  {
    quote: "Super smooth experience-launched my site in no time!",
    author: "- Daniel K",
  },
  {
    quote: "Beautiful template, easy to customize, and worth every penny.",
    author: "- Amelia R",
  },
  {
    quote: "Exactly what I needed to kickstart my SaaS project fast.",
    author: "- Leo M",
  },
  {
    quote: "Clients keep asking who built my site. This did.",
    author: "- Fatima B",
  },
  {
    quote: "Top-notch quality, responsive support. 10/10.",
    author: "- Carlos M",
  },
];

const CARD_HEIGHT = 130;
const GAP = 16;
const STEP = CARD_HEIGHT + GAP;
const VISIBLE = 3;
const CONTAINER_HEIGHT = CARD_HEIGHT * VISIBLE + GAP * (VISIBLE - 1);
const INTERVAL = 3000;

const ROTATIONS = {
  left: [-3, 0, 3],
  right: [3, 0, -3],
};

function ReviewStack({
  cards,
  side,
}: {
  cards: typeof leftCards;
  side: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = () => {
      idxRef.current = (idxRef.current + 1) % cards.length;
      track.style.transition = "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)";
      track.style.transform = `translateY(-${idxRef.current * STEP}px)`;

      if (idxRef.current === cards.length - 1) {
        setTimeout(() => {
          track.style.transition = "none";
          idxRef.current = 0;
          track.style.transform = "translateY(0px)";
        }, 700);
      }
    };

    const timer = setInterval(slide, INTERVAL);
    return () => clearInterval(timer);
  }, [cards.length]);

  const rotations = ROTATIONS[side];

  return (
    <div
      className="relative hidden overflow-hidden lg:block"
      style={{ height: `${CONTAINER_HEIGHT}px` }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 z-10"
        style={{
          height: `${CARD_HEIGHT * 0.7}px`,
          background: "linear-gradient(to bottom, #f0f0ee 15%, transparent)",
        }}
      />

      <div
        ref={trackRef}
        className="flex flex-col"
        style={{ gap: `${GAP}px`, transform: "translateY(0px)" }}
      >
        {cards.map((card, i) => {
          const posIndex = i % VISIBLE;
          const deg = rotations[posIndex];

          return (
            <div
              key={i}
              className="shrink-0 rounded-2xl border border-gray-200 bg-white p-4"
              style={{
                height: `${CARD_HEIGHT}px`,
                transform: `rotate(${deg}deg)`,
              }}
            >
              <div className="flex items-start justify-between">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
                  &quot;{card.quote}&quot;
                </p>
                <span className="ml-2 -mt-0.5 shrink-0 text-xl text-gray-300">
                  &quot;
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-gray-400">
                {card.author}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-10"
        style={{
          height: `${CARD_HEIGHT * 0.7}px`,
          background: "linear-gradient(to top, #f0f0ee 15%, transparent)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f0f0ee]">
      <div className="absolute top-0 left-0 z-0 flex w-full justify-center">
        <div
          className="h-32 w-full max-w-7xl opacity-40 sm:h-40"
          style={{
            backgroundImage: "radial-gradient(#00000055 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative z-10 grid min-h-[calc(100svh-88px)] grid-cols-1 items-center gap-6 px-4 py-8 sm:min-h-[calc(100vh-88px)] sm:px-6 sm:py-16 lg:grid-cols-[240px_1fr_240px] lg:gap-6 lg:px-10 lg:py-12">
        <ReviewStack cards={leftCards} side="left" />

        <div className="flex flex-col items-center justify-center px-1 text-center sm:px-2 lg:px-4">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-800 sm:mb-6 sm:text-sm lg:mb-5">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Open for Work
          </div>

          <h1 className="mb-3 max-w-2xl text-[2rem] font-bold leading-[1.05] text-gray-900 sm:mb-4 sm:text-5xl sm:leading-tight md:text-6xl lg:mb-6">
            Web & Brand Design <br />
            For Ambitious Founders
          </h1>

          <p className="mb-5 max-w-md text-sm leading-relaxed text-gray-600 sm:mb-6 sm:max-w-xl sm:text-base lg:mb-10 lg:text-lg">
            We build conversion-driven websites and marketing that attract,
            engage, and convert.
          </p>

          <div className="mb-6 flex w-full flex-col items-center gap-3 sm:mb-8 sm:w-auto sm:flex-row sm:gap-4 lg:mb-10">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 sm:w-auto">
              Book A Call
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30">
                <svg
                  className="h-2.5 w-2.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" />
                </svg>
              </span>
            </button>

            <button className="w-full rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50 sm:w-auto">
              View Projects
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
              ].map((src, i) => (
                <div
                  key={i}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-white sm:h-10 sm:w-10"
                >
                  <Image
                    src={src}
                    alt="user"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center sm:text-left">
              <div className="text-sm text-yellow-400">★★★★★</div>
              <div className="text-xs text-gray-500">From 150+ reviews</div>
            </div>
          </div>
        </div>

        <ReviewStack cards={rightCards} side="right" />
      </div>
    </div>
  );
}

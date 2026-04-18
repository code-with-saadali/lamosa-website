"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const leftCards = [
  { quote: "helped me go live in days, not weeks-highly recommend.", author: "- Marcus T" },
  { quote: "The updates and attention to detail are unmatched.", author: "- Nora S" },
  { quote: "Saved me weeks of work, and the result looks professional.", author: "- Leo M" },
  { quote: "Best investment for my startup launch, period.", author: "- Priya K" },
  { quote: "Clean code and stunning design-loved every bit of it.", author: "- Sam W" },
];

const rightCards = [
  { quote: "Super smooth experience-launched my site in no time!", author: "- Daniel K" },
  { quote: "Beautiful template, easy to customize, and worth every penny.", author: "- Amelia R" },
  { quote: "Exactly what I needed to kickstart my SaaS project fast.", author: "- Leo M" },
  { quote: "Clients keep asking who built my site. This did.", author: "- Fatima B" },
  { quote: "Top-notch quality, responsive support. 10/10.", author: "- Carlos M" },
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
        style={{ gap: `${GAP}px` }}
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
              <p className="text-sm text-gray-700">
                &quot;{card.quote}&quot;
              </p>
              <p className="mt-2 text-xs text-gray-400">
                {card.author}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-0 left-0 z-10"
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

      {/* background pattern */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-40">
        <div
          className="h-32 w-full max-w-7xl"
          style={{
            backgroundImage: "radial-gradient(#00000055 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-[240px_1fr_240px] items-center gap-6 px-4 py-10">

        {/* LEFT */}
        <ReviewStack cards={leftCards} side="left" />

        {/* CENTER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Web & Brand Design <br /> For Ambitious Founders
          </h1>

          <p className="text-gray-600 mb-6">
            We build conversion-driven websites that attract and convert.
          </p>

          <div className="flex justify-center gap-3 mb-6">
            <button className="bg-black text-white px-5 py-2 rounded-full">
              Book A Call
            </button>
            <button className="border px-5 py-2 rounded-full">
              View Projects
            </button>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>

            <div className="text-left">
              <div className="text-yellow-400 text-sm">★★★★★</div>
              <div className="text-xs text-gray-500">From 150+ reviews</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <ReviewStack cards={rightCards} side="right" />

      </div>
    </div>
  );
}

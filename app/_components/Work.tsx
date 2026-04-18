"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    full: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=160&auto=format&fit=crop",
  },
  {
    id: 2,
    full: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=160&auto=format&fit=crop",
  },
  {
    id: 3,
    full: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&auto=format&fit=crop",
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  function animate() {
    currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.1);
    currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.1);

    setBtnPos({
      x: currentPos.current.x,
      y: currentPos.current.y,
    });

    rafRef.current = requestAnimationFrame(animate);
  }

  function handleMouseEnter(e: React.MouseEvent) {
    const rect = wrapRef.current!.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    targetPos.current = {
      x: e.clientX - rect.left - cx,
      y: e.clientY - rect.top - cy,
    };

    currentPos.current = { ...targetPos.current };

    setIsHovered(true);
    rafRef.current = requestAnimationFrame(animate);
  }

  function handleMouseMove(e: React.MouseEvent) {
    const rect = wrapRef.current!.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    targetPos.current = {
      x: e.clientX - rect.left - cx,
      y: e.clientY - rect.top - cy,
    };
  }

  function handleMouseLeave() {
    targetPos.current = { x: 0, y: 0 };
    setIsHovered(false);
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Navigation handlers
  const goPrev = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f0f0ee] py-4 md:py-10">
      <div className="bg-white max-w-7xl rounded-2xl md:rounded-[40px] mx-auto relative overflow-hidden">
        {/* Header - responsive stack */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-4 md:px-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <h2 className="text-xl md:text-2xl tracking-tighter font-medium text-gray-900">
              Redesigning Atlas
            </h2>
            <span className="text-sm md:text-lg text-gray-400">
              +45% engagement, -20% churn
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-base md:text-lg font-medium text-gray-700 cursor-pointer">
              View Project
            </span>
            <button className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">
              →
            </button>
          </div>
        </div>

        {/* Image container with slider arrows (mobile) */}
        <div className="relative m-2 md:m-3">
          <div
            ref={wrapRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-xl overflow-hidden aspect-video cursor-none group"
          >
            <Image
              src={images[active].full}
              alt="Project"
              fill
              className="object-cover transition-all duration-700 
                         group-hover:scale-[1.06] 
                         group-hover:brightness-110"
            />

            {/* Floating Button (desktop hover effect) */}
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${btnPos.x}px), calc(-50% + ${btnPos.y}px))`,
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
              className="backdrop-blur-md bg-black/60 text-white text-xs md:text-sm px-3 py-1.5 md:px-5 md:py-2.5 rounded-full shadow-lg whitespace-nowrap"
            >
              View Project
            </button>
          </div>

          {/* Mobile Slider Arrows - visible only on small screens */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition md:hidden"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition md:hidden"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails - absolute on desktop, relative scrollable row on mobile */}
        <div className="flex gap-2 md:gap-3 pb-4 px-4 md:px-0 relative md:absolute md:bottom-8 md:left-10 mt-3 md:mt-0">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setActive(i)}
              className={`shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                active === i
                  ? "ring-2 ring-gray-900 scale-105"
                  : "ring-1 ring-gray-200"
              }`}
            >
              <Image
                src={img.thumb}
                alt="thumb"
                width={160}
                height={96}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

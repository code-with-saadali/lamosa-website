"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  tags: string[];
  img: string;
};

const projects: Project[] = [
  {
    name: "Atlas Technologies",
    tags: ["UX Design", "Web Design"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    name: "Finlytics",
    tags: ["UI Design", "Branding"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    name: "Orbital Bank",
    tags: ["Fintech", "UX Design", "Web Design"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    name: "Echo Analytics",
    tags: ["UI Design", "Motion Design"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

function HoverCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const wrapRef = useRef<HTMLDivElement>(null);
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = () => {
    current.current.x = lerp(current.current.x, target.current.x, 0.1);
    current.current.y = lerp(current.current.y, target.current.y, 0.1);

    setPos({ x: current.current.x, y: current.current.y });
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleEnter = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    target.current = {
      x: e.clientX - rect.left - cx,
      y: e.clientY - rect.top - cy,
    };

    current.current = { ...target.current };
    setIsHovered(true);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    target.current = {
      x: e.clientX - rect.left - cx,
      y: e.clientY - rect.top - cy,
    };
  };

  const handleLeave = () => {
    target.current = { x: 0, y: 0 };
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <span className="text-xl font-medium tracking-tighter text-black sm:text-2xl">
          {project.name}
        </span>
        <button className="flex w-fit items-center gap-3 rounded-full border border-gray-200 px-3 py-1 text-base text-black transition hover:bg-gray-50 sm:text-lg">
          View
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-[10px]">
            -&gt;
          </span>
        </button>
      </div>

      <div className="flex flex-wrap gap-2 px-4 sm:px-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="mb-2 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-[#4B4B4B] sm:mb-4 sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        ref={wrapRef}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative rounded-[28px] border border-gray-200 p-2 sm:rounded-[46px] md:cursor-none"
      >
        <div className="overflow-hidden rounded-3xl sm:rounded-[46px]">
          <Image
            src={project.img}
            alt={project.name}
            width={500}
            height={300}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80 lg:h-136"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
          }}
          className="hidden rounded-full bg-black/70 px-4 py-1.5 text-xs text-white shadow-lg backdrop-blur-md md:block"
        >
          View Project
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#F0F0EE] px-4 py-16 sm:px-5 lg:px-20">
      <div className="mb-3 flex items-center gap-2 text-xs tracking-widest text-gray-500">
        <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
        Projects
      </div>

      <h2 className="mb-8 text-center text-3xl font-medium leading-snug text-gray-900 sm:mb-10">
        Here&apos;s what
        <br />
        <span className="text-gray-400">the momentum looks like.</span>
      </h2>

      <div className="w-full rounded-[28px] border border-gray-200 bg-white p-4 sm:rounded-[46px] sm:p-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <HoverCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex w-full justify-center md:justify-end">
        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-900 transition hover:bg-gray-50">
          View All Projects
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-[10px]">
            -&gt;
          </span>
        </button>
      </div>
    </section>
  );
}

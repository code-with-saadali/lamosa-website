"use client";
import Image from "next/image";

const posts = [
  {
    author: "Tarek El-Hassan",
    date: "Jul 9, 2025",
    readTime: "8 min",
    title: "Why Motion Design is the New Differentiator in SaaS",
    tags: ["Motion Design", "Design"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: true,
  },
  {
    author: "Maya Koji",
    date: "Jun 18, 2025",
    readTime: "9 min",
    title: "The Psychology Behind High-Converting Landing Pages",
    tags: ["Design", "Technology"],
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
    featured: false,
  },
  {
    author: "Amina Johnson",
    date: "Jul 4, 2025",
    readTime: "12 min",
    title: "Building an MVP That Doesn't Suck: 6 Rules to Follow",
    tags: ["product-development", "Design"],
    img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80",
    featured: false,
  },
];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section className="bg-[#f0f0ee] px-5 md:px-16 lg:px-24 py-20">
      {/* Header */}
      <div className="mb-10">
        <span className="w-2 h-2 rounded-full bg-red-500 inline-block mb-4" />
        <h2 className="text-5xl font-semibold text-black tracking-tight">
          Fresh insights & ideas <br />
          <span className="text-[#6B7280]">from the team.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#404040] mt-2 font-medium">
          Expert tips, case studies, and trends to help you design, grow, and
          convert smarter.
        </p>
      </div>

      {/* Card Container */}
      <div className="bg-white border border-gray-200 rounded-[46px] p-3 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT — Featured */}
          <div className="flex flex-col gap-3 cursor-pointer group">
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#7C7C7C] font-medium">
              <span>
                {featured.author} • {featured.date}
              </span>
              <span>{featured.readTime}</span>
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl text-black font-medium tracking-tight leading-snug transition-colors duration-300">
              {featured.title}
            </h4>

            <div className="flex items-center gap-2 flex-wrap">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-600 border font-medium border-gray-200 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
              <span className="ml-auto w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 group-hover:bg-gray-100 transition-colors duration-300">
                →
              </span>
            </div>

            <div className="rounded-[46px] border border-gray-200 mt-1 p-1.5">
              <div className="relative rounded-[46px] overflow-hidden h-56 sm:h-64 md:h-120">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-5 bg-white/90 text-xs font-medium text-gray-700 px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Two posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-4 cursor-pointer group rounded-2xl p-3 transition-colors duration-300"
              >
                {/* Image wrapper */}
                <div className="rounded-3xl border border-gray-200 p-1.5 shrink-0">
                  <div className="relative w-full h-48 sm:w-36 sm:h-36 md:w-64 md:h-54 rounded-2xl overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-1">
                    <span>
                      {post.author} • {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-black leading-snug">
                    {post.title}
                  </h4>

                  <div className="flex items-end justify-between gap-2 mt-2 flex-wrap">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs sm:text-sm text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs text-gray-500 group-hover:bg-gray-100 transition-colors duration-300 shrink-0">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

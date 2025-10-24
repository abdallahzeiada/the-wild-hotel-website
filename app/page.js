import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function page() {
  return (
    <main className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={90}
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-900/60 to-primary-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-32 max-w-6xl mx-auto">
        {/* Premium Badge with glow effect */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-sm border border-accent-400/30 mt-6 sm:mt-8 md:mt-10">
            ✦ Premium Mountain Retreats ✦
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight mb-6 sm:mb-8 font-extrabold leading-tight animate-slide-up">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-white drop-shadow-2xl">
            Welcome to
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent-500 via-accent-300 to-accent-500 drop-shadow-2xl mt-1 sm:mt-2">
            The Wild Hotel
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-xl opacity-95 px-2">
          Experience luxury in nature. Discover our handpicked collection of
          exclusive cabins nestled in breathtaking landscapes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center px-4">
          <Link
            href="/cabins"
            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 text-white text-base sm:text-lg font-bold hover:from-accent-600 hover:to-accent-700 transition-all rounded-xl hover:scale-105 transform duration-300 border border-accent-400/30 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10">Explore Luxury Cabins</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Link>
          <Link
            href="/about"
            className="bg-white/10 backdrop-blur-xl px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 text-white text-base sm:text-lg font-bold hover:bg-white/20 transition-all rounded-xl border-2 border-white/40 hover:border-accent-400/60 hover:scale-105 transform duration-300 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 sm:mt-14 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-primary-200/80 text-sm sm:text-base font-medium px-4">
          <div className="flex items-center gap-2">
            <span className="text-accent-400 text-lg sm:text-xl">★</span>
            <span className="whitespace-nowrap">5-Star Luxury</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-400 text-lg sm:text-xl">★</span>
            <span className="whitespace-nowrap">Nature Views</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-400 text-lg sm:text-xl">★</span>
            <span className="whitespace-nowrap">Premium Service</span>
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export const revalidate = 86400; // revalidate every day

export default async function Page() {
  const numCabins = (await getCabins()).length;
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4">
        <div className="mb-3 sm:mb-4">
          <span className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            Our Story
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-accent-300 leading-tight px-2">
          Welcome to The Wild Oasis
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary-200 leading-relaxed px-2">
          Where nature&apos;s beauty and comfortable living blend seamlessly in the heart of the Italian Dolomites.
        </p>
      </div>

      {/* First Content Block with Image */}
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden group order-2 lg:order-1">
          <Image
            fill
            src={image1}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-2 sm:px-0">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-accent-400">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"></div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Your Paradise Away from Home
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 text-primary-200 text-base sm:text-lg leading-relaxed">
            <p>
              Our {numCabins} luxury cabins provide a cozy base, but the real freedom and peace you&apos;ll find in the surrounding mountains. Wander through lush forests, breathe in the fresh air, and watch the stars twinkle above.
            </p>
            <p>
              This is where memorable moments are made, surrounded by nature&apos;s splendor. It&apos;s a place to slow down, relax, and feel the joy of being together in a beautiful setting.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
            <div className="text-center p-3 sm:p-4 bg-primary-900/50 rounded-lg sm:rounded-xl border border-primary-800/30">
              <div className="text-2xl sm:text-3xl font-bold text-accent-400">{numCabins}</div>
              <div className="text-xs sm:text-sm text-primary-300 mt-1">Cabins</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-primary-900/50 rounded-lg sm:rounded-xl border border-primary-800/30">
              <div className="text-2xl sm:text-3xl font-bold text-accent-400">60+</div>
              <div className="text-xs sm:text-sm text-primary-300 mt-1">Years</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-primary-900/50 rounded-lg sm:rounded-xl border border-primary-800/30">
              <div className="text-2xl sm:text-3xl font-bold text-accent-400">5★</div>
              <div className="text-xs sm:text-sm text-primary-300 mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Block with Image */}
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        {/* Content */}
        <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-accent-400">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"></div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Family-Run Since 1962
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 text-primary-200 text-base sm:text-lg leading-relaxed">
            <p>
              The Wild Oasis has been a cherished family-run retreat for over six decades. Started by our grandparents, this haven has been nurtured with love and care through generations.
            </p>
            <p>
              Here, you&apos;re not just a guest; you&apos;re part of our extended family. Join us where tradition meets tranquility, and every visit is like coming home.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2 sm:pt-4">
            <Link
              href="/cabins"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg font-bold hover:from-accent-600 hover:to-accent-700 transition-all shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transform duration-300 w-full sm:w-auto"
            >
              <span>Explore Our Luxury Cabins</span>
              <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden group">
          <Image
            src={image2}
            fill
            placeholder="blur"
            quality={85}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Family that manages The Wild Oasis"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-12 px-2 sm:px-0">
        <div className="p-6 sm:p-8 bg-gradient-to-br from-primary-900/50 to-primary-950/50 rounded-xl sm:rounded-2xl border border-primary-800/30 hover:border-accent-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏔️</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Mountain Views</h3>
          <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
            Wake up to breathtaking views of the Italian Dolomites every morning.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-primary-900/50 to-primary-950/50 rounded-xl sm:rounded-2xl border border-primary-800/30 hover:border-accent-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛁</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Private Hot Tubs</h3>
          <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
            Relax under the stars in your own private hot tub after a day of adventure.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-primary-900/50 to-primary-950/50 rounded-xl sm:rounded-2xl border border-primary-800/30 hover:border-accent-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10 sm:col-span-2 md:col-span-1">
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌲</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Nature Trails</h3>
          <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
            Explore pristine forests and discover the beauty of untouched wilderness.
          </p>
        </div>
      </div>
    </div>
  );
}

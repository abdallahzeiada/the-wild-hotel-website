import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="relative w-full min-h-screen  -mt-6 sm:-mt-8 md:-mt-12 mb-6 sm:mb-8 md:mb-10">
      {/* Split Screen Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-screen lg:sticky lg:top-0">
          <Image
            fill
            className="object-cover"
            src={image}
            alt={`Cabin ${name}`}
            quality={95}
            priority
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-transparent to-primary-950/60"></div>

          {/* Floating price tag */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
            <div className="inline-flex items-baseline gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 shadow-2xl">
              {discount > 0 ? (
                <>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                    ${regularPrice - discount}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base line-through text-white/60 font-medium">
                      ${regularPrice}
                    </span>
                    <span className="text-[10px] sm:text-xs text-accent-300 font-semibold">
                      per night
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                    ${regularPrice}
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/80 font-semibold">
                    per night
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Bottom gradient with cabin name */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
              Cabin
              <br />
              {name}
            </h1>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col justify-center">
          <div className="max-w-2xl space-y-6 sm:space-y-8 md:space-y-10">
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2 border-l-3 sm:border-l-4 border-accent-500 pl-2 sm:pl-3">
              <span className="text-accent-400 font-black text-[10px] sm:text-xs uppercase tracking-widest">
                Luxury Retreat
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Experience
              </h2>
              <p className="text-base sm:text-lg text-primary-100 leading-relaxed">
                <TextExpander>{description}</TextExpander>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="group relative overflow-hidden bg-gradient-to-br from-accent-500/10 to-accent-600/5 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-accent-500/20 hover:border-accent-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/20">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent-400 mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5 sm:mb-1">
                  {maxCapacity}
                </div>
                <div className="text-[10px] sm:text-xs text-primary-300 uppercase tracking-wide">
                  Guests
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-accent-500/10 to-accent-600/5 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-accent-500/20 hover:border-accent-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/20">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent-400 mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5 sm:mb-1">
                  IT
                </div>
                <div className="text-[10px] sm:text-xs text-primary-300 uppercase tracking-wide">
                  Dolomites
                </div>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-accent-500/10 to-accent-600/5 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-accent-500/20 hover:border-accent-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/20">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <EyeSlashIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent-400 mb-1 sm:mb-2" />
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5 sm:mb-1">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-primary-300 uppercase tracking-wide">
                  Privacy
                </div>
              </div>
            </div>

            {/* Amenities Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-2 sm:pt-4">
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-800/50 border border-primary-700 rounded-full text-[10px] sm:text-xs text-primary-200">
                🛁 Hot Tub
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-800/50 border border-primary-700 rounded-full text-[10px] sm:text-xs text-primary-200">
                🔥 Fireplace
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-800/50 border border-primary-700 rounded-full text-[10px] sm:text-xs text-primary-200">
                📶 WiFi
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-800/50 border border-primary-700 rounded-full text-[10px] sm:text-xs text-primary-200">
                🍳 Kitchen
              </span>
              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-800/50 border border-primary-700 rounded-full text-[10px] sm:text-xs text-primary-200">
                🌲 Forest View
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabin;

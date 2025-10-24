import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-accent-950/30 to-primary-900"></div>
      
      {/* Animated ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Premium Loading Badge */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-gradient-to-r from-accent-500/20 to-accent-600/20 backdrop-blur-sm text-accent-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-accent-400/30 animate-pulse">
            ✦ The Wild Hotel ✦
          </span>
        </div>

        {/* Spinner */}
        <div className="mb-6 sm:mb-8">
          <Spinner />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-300 to-white drop-shadow-lg">
            Preparing Your Experience
          </span>
        </h2>

        {/* Subtext with animation */}
        <div className="flex justify-center items-center gap-1 sm:gap-2 text-primary-200 text-base sm:text-lg">
          <span className="animate-pulse delay-100">Loading</span>
          <span className="animate-pulse delay-200">.</span>
          <span className="animate-pulse delay-300">.</span>
          <span className="animate-pulse delay-400">.</span>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 sm:mt-14 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-primary-300 text-xs sm:text-sm opacity-70 px-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-accent-400 text-sm sm:text-base">✦</span>
            <span className="whitespace-nowrap">Premium Service</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-accent-400 text-sm sm:text-base">✦</span>
            <span className="whitespace-nowrap">Luxury Awaits</span>
          </div>
        </div>
      </div>
    </div>
  );
}

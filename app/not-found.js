import Link from "next/link";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 animate-gradient-shift"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-56 h-56 sm:w-96 sm:h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
        {/* 404 Number with dramatic styling */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[240px] font-extrabold leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 drop-shadow-2xl animate-pulse">
              404
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block bg-gradient-to-r from-accent-500/20 to-accent-600/20 backdrop-blur-sm text-accent-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border border-accent-400/30">
            ✦ Lost in the Wilderness ✦
          </span>
        </div>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg px-2">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-primary-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
          Looks like you&apos;ve wandered off the trail. The page you&apos;re looking for doesn&apos;t exist in our luxury retreat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            href="/"
            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:from-accent-600 hover:to-accent-700 transition-all rounded-xl hover:scale-105 transform duration-300 border border-accent-400/30 overflow-hidden shadow-xl shadow-accent-500/20 w-full sm:w-auto"
          >
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Link>
          
          <Link
            href="/cabins"
            className="bg-white/10 backdrop-blur-xl px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:bg-white/20 transition-all rounded-xl border-2 border-white/40 hover:border-accent-400/60 hover:scale-105 transform duration-300 w-full sm:w-auto"
          >
            Explore Cabins
          </Link>
        </div>

        {/* Additional help text */}
        <p className="mt-8 sm:mt-10 md:mt-12 text-primary-300 text-xs sm:text-sm px-2">
          Need assistance? <Link href="/about" className="text-accent-400 hover:text-accent-300 underline">Contact our team</Link>
        </p>
      </div>
    </main>
  );
}

export default NotFound;

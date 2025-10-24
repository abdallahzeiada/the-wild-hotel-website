import Link from "next/link";

function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900/50 to-accent-950/30"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-accent-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-accent-500/20 to-primary-500/20 backdrop-blur-sm border-3 sm:border-4 border-accent-500/40 rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <span className="text-5xl sm:text-7xl">🏠</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block bg-gradient-to-r from-accent-500/20 to-accent-600/20 backdrop-blur-sm text-accent-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border border-accent-400/30">
            ✦ Cabin Not Found ✦
          </span>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 drop-shadow-lg px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-300 to-white">
            This Cabin Doesn&apos;t Exist
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-primary-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
          Sorry, we couldn&apos;t find the luxury cabin you&apos;re looking for. It may have been removed or the link might be incorrect.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            href="/cabins"
            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:from-accent-600 hover:to-accent-700 transition-all rounded-xl hover:scale-105 transform duration-300 border border-accent-400/30 overflow-hidden shadow-xl shadow-accent-500/20 w-full sm:w-auto"
          >
            <span className="relative z-10">Browse All Cabins</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Link>
          
          <Link
            href="/"
            className="bg-white/10 backdrop-blur-xl px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:bg-white/20 transition-all rounded-xl border-2 border-white/40 hover:border-accent-400/60 hover:scale-105 transform duration-300 w-full sm:w-auto"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;

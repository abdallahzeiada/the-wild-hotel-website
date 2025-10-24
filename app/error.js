"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic error background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-primary-950 to-accent-950/50"></div>
      
      {/* Animated warning circles */}
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-56 h-56 sm:w-80 sm:h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        {/* Warning Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-red-500/20 to-accent-500/20 backdrop-blur-sm border-3 sm:border-4 border-red-500/40 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
              <span className="text-5xl sm:text-7xl">⚠️</span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm text-red-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase border border-red-400/30">
            ✦ System Error ✦
          </span>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-accent-400 to-red-400">
            Oops!
          </span>{" "}
          <span className="block sm:inline mt-2 sm:mt-0">Something Went Wrong</span>
        </h1>

        {/* Error Details */}
        <div className="mb-8 sm:mb-10 md:mb-12 bg-primary-900/50 backdrop-blur-xl border border-primary-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <p className="text-base sm:text-lg text-primary-200 mb-2 font-semibold">Error Details:</p>
          <p className="text-xs sm:text-sm md:text-base text-red-300 font-mono bg-primary-950/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-500/20 break-words">
            {error.message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4">
          <button
            onClick={reset}
            className="group relative bg-gradient-to-r from-accent-500 to-accent-600 px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:from-accent-600 hover:to-accent-700 transition-all rounded-xl hover:scale-105 transform duration-300 border border-accent-400/30 overflow-hidden shadow-xl shadow-accent-500/20 w-full sm:w-auto"
          >
            <span className="relative z-10">🔄 Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>

          <Link
            href="/"
            className="bg-white/10 backdrop-blur-xl px-8 sm:px-10 py-3 sm:py-4 text-white text-base sm:text-lg font-bold hover:bg-white/20 transition-all rounded-xl border-2 border-white/40 hover:border-accent-400/60 hover:scale-105 transform duration-300 w-full sm:w-auto"
          >
            Return Home
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-primary-300 text-xs sm:text-sm px-2">
          If this problem persists, please{" "}
          <Link href="/about" className="text-accent-400 hover:text-accent-300 underline font-semibold">
            contact our support team
          </Link>
        </p>
      </div>
    </main>
  );
}

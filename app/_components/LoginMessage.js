import Link from "next/link";

function LoginMessage() {
  return (
    <div className="relative group h-full">
      <div className='relative h-full flex items-center justify-center bg-gradient-to-br from-primary-900/95 via-primary-950/95 to-primary-900/95 backdrop-blur-2xl border border-accent-500 rounded-2xl overflow-hidden p-8'>
        <div className="text-center space-y-4 max-w-md">
          {/* Lock Icon with Animation */}
          <div className="relative inline-block">
            <div className="relative bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 border-3 border-accent-400/50">
              <span className="text-5xl drop-shadow-lg">🔐</span>
            </div>
            <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-accent-400 rounded-full flex items-center justify-center border-3 border-primary-950 shadow-lg">
              <span className="text-xs">✨</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h3 className="text-5xl font-black text-white leading-tight">
              Sign In to Continue
            </h3>
            <p className='text-base text-primary-300 leading-relaxed font-medium'>
              Create an account or sign in to unlock <span className="text-accent-400 font-bold">exclusive booking features</span> and manage your reservations with ease.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href='/login'
            className='relative group/btn inline-block w-full'
          >
            <div className='relative overflow-hidden rounded-xl transition-all duration-300'>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
              <div className='relative flex items-center justify-center gap-2.5 px-5 py-3.5 text-white text-lg font-black'>
                <span className="text-lg">🚀</span>
                <span className="tracking-wide">Sign In Now</span>
                <span className="text-lg group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>

          {/* Features list */}
          <div className="space-y-2.5 pt-3">
            <div className="flex items-center gap-2.5 text-primary-300">
              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Instant booking confirmation</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary-300">
              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Manage all your reservations</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary-300">
              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Exclusive member benefits</span>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="pt-6 border-t border-accent-500/10">
            <p className="text-sm text-primary-400 flex items-center justify-center gap-2 font-semibold">
              <span className="text-base">🔒</span>
              <span>Secure authentication powered by Google</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMessage;

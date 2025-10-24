import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full px-3 sm:px-4 md:px-6">
      <div className="w-full max-w-[340px] sm:max-w-md md:max-w-lg">
        {/* Card Container with glassmorphism effect */}
        <div className="relative bg-gradient-to-br from-primary-800/40 via-primary-900/50 to-primary-950/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-primary-700/50 overflow-hidden">
          {/* Content */}
          <div className="relative z-10 p-8 py-10">
            {/* Profile Icon */}
            <div className="flex justify-center mb-2 sm:mb-3">
              <div className="relative">
                {/* Icon container */}
                <div className="relative bg-gradient-to-br from-accent-500 to-accent-600 p-2.5 sm:p-3 rounded-full border-2 border-accent-400/50">
                  {/* User icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="text-center mb-2 sm:mb-3">
              <span className="inline-block bg-gradient-to-r from-accent-500/20 to-accent-600/20 backdrop-blur-sm text-accent-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-accent-500/30 my-2">
                ✦ Guest Access ✦
              </span>
            </div>

            {/* Heading */}
            <div className="text-center mb-3 sm:mb-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-1.5 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-50 to-white leading-tight">
                Welcome Back
              </h1>
              <p className="text-primary-300 text-[11px] sm:text-xs font-light leading-relaxed px-2">
                Sign in to access your Account
              </p>
            </div>

            {/* Sign In Button */}
            <SignInButton />

            {/* Decorative divider */}
            <div className="relative mt-3 sm:mt-4 flex items-center justify-center">
              {/* Gradient line */}
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/60 to-transparent"></div>
              <div className="absolute left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent blur-sm"></div>

              {/* Text with background */}
              <p className="relative px-3 sm:px-4 text-center text-primary-400 text-[9px] sm:text-[10px]">
                Secure authentication powered by Google
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5">
              <div className="flex items-center gap-2 text-primary-200 text-[11px] sm:text-xs">
                <span className="text-accent-400 text-sm sm:text-base flex-shrink-0">
                  ✓
                </span>
                <span>Manage your bookings</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-[11px] sm:text-xs">
                <span className="text-accent-400 text-sm sm:text-base flex-shrink-0">
                  ✓
                </span>
                <span>Update your profile</span>
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-[11px] sm:text-xs">
                <span className="text-accent-400 text-sm sm:text-base flex-shrink-0">
                  ✓
                </span>
                <span>Exclusive benefits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info below card */}
        <div className="mt-2 text-center px-2">
          <p className="text-primary-400 text-[9px] sm:text-[10px] leading-relaxed">
            By signing in, you agree to our{" "}
            <span className="text-accent-400 hover:text-accent-300 cursor-pointer underline transition-colors">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-accent-400 hover:text-accent-300 cursor-pointer underline transition-colors">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

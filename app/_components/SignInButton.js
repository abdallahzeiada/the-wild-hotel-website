import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction} className="w-full">
      <button className="group relative w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] transform border border-accent-400/30 overflow-hidden touch-manipulation">
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="20"
            width="20"
            className="bg-white rounded p-0.5 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
          />
          <span className="whitespace-nowrap">Continue with Google</span>
        </span>
      </button>
    </form>
  );
}

export default SignInButton;

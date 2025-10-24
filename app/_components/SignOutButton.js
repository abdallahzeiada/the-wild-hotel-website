import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="group relative overflow-hidden py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-all duration-300 flex items-center gap-4 font-semibold text-primary-200 w-full rounded-lg lg:rounded-none hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <ArrowRightStartOnRectangleIcon className="relative z-10 h-5 w-5 text-primary-600 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-110" />
        <span className="relative z-10">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;

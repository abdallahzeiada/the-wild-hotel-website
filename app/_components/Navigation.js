import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "../_lib/data-service";
import { HomeIcon, InformationCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default async function Navigation() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  return (
    <nav className="z-10 text-sm sm:text-base">
      <ul className="flex gap-1 sm:gap-2 items-center">
        <li>
          <Link
            href="/cabins"
            className="relative px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-white/90 hover:text-white transition-all duration-300 hover:bg-white/5 group text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2"
          >
            <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10 ">Cabins</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-primary-500/10 transition-all duration-300"></div>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="relative px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold text-white/90 hover:text-white transition-all duration-300 hover:bg-white/5 group text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2"
          >
            <InformationCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10 ">About</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-primary-500/10 transition-all duration-300"></div>
          </Link>
        </li>
        <li className="ml-1 sm:ml-2">
          {session?.user?.image ? (
            <Link
              href="/account"
              className="group relative flex items-center gap-1.5 sm:gap-2 md:gap-2.5 font-semibold px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-xl border border-accent-400/30 hover:border-accent-400/50 transition-all duration-300 text-xs sm:text-sm md:text-base"
            >
              <img
                className="rounded-full h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 ring-2 ring-accent-400/50 group-hover:ring-accent-400 transition-all duration-300"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span className="text-white ">
                {guest ? guest.fullName : "Account"}
              </span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="relative px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full font-semibold bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2"
            >
              <UserCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="">Account</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();
  return (
    <nav className="border-b lg:border-b-0 lg:border-r border-primary-900 lg:h-full">
      <ul className="flex lg:flex-col gap-2 lg:h-full text-base lg:text-lg overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
        {navLinks.map((link) => (
          <li key={link.name} className="flex-shrink-0 lg:flex-shrink">
            <Link
              className={`py-3 px-4 lg:px-5 hover:bg-primary-900 hover:text-primary-100 transition-all duration-300 flex items-center gap-3 lg:gap-4 font-semibold text-primary-200 rounded-lg lg:rounded-none whitespace-nowrap ${
                pathName === link.href ? "bg-primary-900 text-accent-400 shadow-lg" : ""
              }`}
              href={link.href}   
            >
              <span className={`transition-transform duration-300 ${pathName === link.href ? "scale-110" : ""}`}>
                {link.icon}
              </span>
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="ml-auto lg:mt-auto flex-shrink-0 lg:flex-shrink">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;

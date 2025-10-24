import { auth } from "../_lib/auth";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDaysIcon,
  UserCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon as CalendarSolid,
  UserCircleIcon as UserSolid,
  SparklesIcon as SparklesSolid,
} from "@heroicons/react/24/solid";
import { getBookings } from "../_lib/data-service";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  const upcomingBookings = bookings.filter(
    (booking) => new Date(booking.startDate) >= new Date()
  );
  const pastBookings = bookings.filter(
    (booking) => new Date(booking.startDate) < new Date()
  );
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section with Greeting */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 p-8 md:p-10 shadow-xl animate-slideDown">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-800 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 animate-scaleIn delay-200">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={96}
                  height={96}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
              )}
            </div>
          </div>

          <div className="flex-1 animate-slideRight delay-300">
            <div className="flex items-center gap-2 mb-2">
              <SparklesIcon className="w-5 h-5 text-accent-200 animate-bounce" />
              <p className="text-accent-100 text-sm md:text-base font-medium">
                {greeting}
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {firstName}!
            </h1>
            <p className="text-accent-100 text-sm md:text-base max-w-2xl">
              Welcome back to your personal dashboard. Manage your reservations,
              update your profile, and explore more.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 md:gap-6">
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideUp delay-100">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors duration-300">
                <CalendarSolid className="w-6 h-6 text-accent-400" />
              </div>
              <SparklesSolid className="w-4 h-4 text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            <p className="text-primary-300 text-sm font-medium mb-1">
              Total Reservations
            </p>
            <p className="text-3xl font-bold text-white">
              {bookings.length}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideUp delay-200">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                <ClockIcon className="w-6 h-6 text-blue-400" />
              </div>
              <SparklesSolid className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            <p className="text-primary-300 text-sm font-medium mb-1">
              Upcoming Trips
            </p>
            <p className="text-3xl font-bold text-white">
              {upcomingBookings.length}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideUp delay-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                <HeartIcon className="w-6 h-6 text-green-400" />
              </div>
              <SparklesSolid className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
            <p className="text-primary-300 text-sm font-medium mb-1">
              Completed Trips
            </p>
            <p className="text-3xl font-bold text-white">
              {pastBookings.length}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Link
          href="/account/reservations"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideRight delay-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/10 to-accent-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-accent-500/20 rounded-xl group-hover:bg-accent-500/30 group-hover:scale-110 transition-all duration-300">
                <CalendarDaysIcon className="w-8 h-8 text-accent-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-400 transition-colors duration-300">
                  My Reservations
                </h3>
                <p className="text-primary-300 text-sm">
                  View and manage your bookings
                </p>
              </div>
            </div>
            <ArrowRightIcon className="w-6 h-6 text-accent-400 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>

        <Link
          href="/account/profile"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideLeft delay-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/10 to-accent-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-accent-500/20 rounded-xl group-hover:bg-accent-500/30 group-hover:scale-110 transition-all duration-300">
                <UserCircleIcon className="w-8 h-8 text-accent-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-400 transition-colors duration-300">
                  Profile Settings
                </h3>
                <p className="text-primary-300 text-sm">
                  Update your personal information
                </p>
              </div>
            </div>
            <ArrowRightIcon className="w-6 h-6 text-accent-400 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>
      </div>

      {/* Welcome Message Card */}
      <div className="rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 backdrop-blur-sm p-6 md:p-8 border border-primary-700/50 shadow-lg animate-fadeIn delay-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-accent-500/20 rounded-lg">
            <SparklesIcon className="w-6 h-6 text-accent-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              Getting Started
            </h3>
            <p className="text-primary-300 leading-relaxed mb-4">
              Make the most of your account by keeping your profile up to date
              and exploring our beautiful cabin collection. Book your next
              adventure and create unforgettable memories in nature.
            </p>
            <Link
              href="/cabins"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent-500/50"
            >
              <span>Explore Cabins</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

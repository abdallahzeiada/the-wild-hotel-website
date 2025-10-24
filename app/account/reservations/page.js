import ReservationCard from "@/app/_components/ReservationCard";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";
import {
  CalendarDaysIcon,
  SparklesIcon,
  ArrowRightIcon,
  HomeIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "My Reservations",
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

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 p-8 md:p-10 shadow-xl animate-slideDown">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-800 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 animate-slideRight delay-200">
            <div className="flex items-center gap-2 mb-2">
              <CalendarDaysIcon className="w-5 h-5 text-accent-200" />
              <p className="text-accent-100 text-sm md:text-base font-medium">
                Your Bookings
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Reservations
            </h1>
            <p className="text-accent-100 text-sm md:text-base max-w-2xl">
              Manage your upcoming and past cabin reservations
            </p>
          </div>

          <div className="flex gap-4 animate-scaleIn delay-300">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white">{upcomingBookings.length}</p>
              <p className="text-accent-100 text-xs md:text-sm font-medium">Upcoming</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white">{pastBookings.length}</p>
              <p className="text-accent-100 text-xs md:text-sm font-medium">Past</p>
            </div>
          </div>
        </div>
      </div>

      {bookings.length === 0 ? (
        /* Empty State */
        <div className="space-y-6 animate-slideUp delay-300">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 md:p-12 lg:p-16 shadow-xl text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-accent-500/20 rounded-full flex items-center justify-center animate-bounce">
                <CalendarDaysIcon className="w-10 h-10 md:w-12 md:h-12 text-accent-400" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                No Reservations Yet
              </h2>
              <p className="text-primary-300 text-base md:text-lg mb-8 leading-relaxed">
                You haven&apos;t made any reservations yet. Start your adventure by exploring our beautiful collection of luxury cabins nestled in nature.
              </p>
              
              <Link
                href="/cabins"
                className="inline-flex items-center gap-3 px-6 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent-500/50 group"
              >
                <HomeIcon className="w-5 h-5" />
                <span>Explore Luxury Cabins</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Reservations List */
        <div className="space-y-8">
          {/* Upcoming Reservations */}
          {upcomingBookings.length > 0 && (
            <div className="space-y-4 animate-slideUp delay-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <ClockIcon className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Upcoming Trips
                  <span className="ml-3 text-sm font-normal text-primary-300">
                    ({upcomingBookings.length})
                  </span>
                </h2>
              </div>
              <ReservationList bookings={upcomingBookings} />
            </div>
          )}

          {/* Past Reservations */}
          {pastBookings.length > 0 && (
            <div className="space-y-4 animate-slideUp delay-400">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Past Trips
                  <span className="ml-3 text-sm font-normal text-primary-300">
                    ({pastBookings.length})
                  </span>
                </h2>
              </div>
              <ReservationList bookings={pastBookings} />
            </div>
          )}

          {/* Info Card */}
          <div className="rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 backdrop-blur-sm p-6 md:p-8 border border-primary-700/50 shadow-lg animate-fadeIn delay-700">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-accent-500/20 rounded-lg">
                <SparklesIcon className="w-6 h-6 text-accent-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Manage Your Stays</h3>
                <p className="text-primary-300 leading-relaxed text-sm md:text-base">
                  You can edit or cancel upcoming reservations. For past reservations, feel free to book again and create new memories in our beautiful cabins.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

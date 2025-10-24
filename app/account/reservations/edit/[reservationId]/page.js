import UpdateReservation from "@/app/_components/UpdateReservationForm";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  CalendarIcon,
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
  SparklesIcon,
  ClockIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Edit Reservation",
};

export default async function Page({ params }) {
  const reservationId = params.reservationId;
  const booking = await getBooking(reservationId);
  const cabin = await getCabin(booking.cabinId);
  const { maxCapacity, name, image } = cabin;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Back Button */}
      <Link
        href="/account/reservations"
        className="inline-flex items-center gap-2 text-primary-300 hover:text-accent-400 transition-colors duration-300 group animate-slideRight"
      >
        <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Back to Reservations</span>
      </Link>

      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 p-8 md:p-10 shadow-xl animate-slideDown">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-800 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 animate-scaleIn delay-200">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border-4 border-white/30 shadow-lg">
              <PencilSquareIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </div>
          
          <div className="flex-1 animate-slideRight delay-300">
            <div className="flex items-center gap-2 mb-2">
              <SparklesIcon className="w-5 h-5 text-accent-200" />
              <p className="text-accent-100 text-sm md:text-base font-medium">
                Edit Booking
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Reservation #{reservationId}
            </h1>
            <p className="text-accent-100 text-sm md:text-base max-w-2xl">
              Update your booking details and preferences
            </p>
          </div>
        </div>
      </div>

      {/* Cabin Info Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl animate-slideUp delay-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Cabin Image */}
          <div className="relative h-64 sm:h-auto md:w-80 flex-shrink-0 overflow-hidden">
            <Image
              src={image}
              fill
              alt={`Cabin ${name}`}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-900/80 to-transparent"></div>
          </div>

          {/* Booking Details */}
          <div className="flex-grow p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-lg">
                <HomeIcon className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Cabin {name}</h2>
                <p className="text-primary-300 text-sm">Your reserved accommodation</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <CalendarIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Check-in</p>
                  <p className="text-white font-semibold">{format(new Date(booking.startDate), "MMM dd, yyyy")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CalendarIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Check-out</p>
                  <p className="text-white font-semibold">{format(new Date(booking.endDate), "MMM dd, yyyy")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <ClockIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Duration</p>
                  <p className="text-white font-semibold">{booking.numNights} {booking.numNights === 1 ? "night" : "nights"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-accent-500/20 rounded-lg">
                  <CurrencyDollarIcon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Total Price</p>
                  <p className="text-white font-semibold">${booking.totalPrice}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <UserGroupIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Current Guests</p>
                  <p className="text-white font-semibold">{booking.numGuests}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-4">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <UserGroupIcon className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wide">Max Capacity</p>
                  <p className="text-white font-semibold">{maxCapacity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Form Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl animate-slideUp delay-400">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent-500/20 rounded-lg">
              <PencilSquareIcon className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Modify Booking Details</h2>
              <p className="text-primary-300 text-sm">Update guest count and special requests</p>
            </div>
          </div>

          <UpdateReservation
            booking={booking}
            maxCapacity={maxCapacity}
            reservationId={reservationId}
          />
        </div>
      </div>

      {/* Info Notice */}
      <div className="rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 backdrop-blur-sm p-6 border border-primary-700/50 shadow-lg animate-fadeIn delay-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-blue-500/20 rounded-lg">
            <SparklesIcon className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">Important Note</h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              Changes to your reservation are subject to availability. Dates cannot be modified here - please cancel and create a new booking if you need to change your dates. 
              For questions, contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

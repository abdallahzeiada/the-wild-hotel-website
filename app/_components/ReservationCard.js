import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  HomeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
    cabinId,
  } = booking;

  const isPastBooking = isPast(new Date(startDate));

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            fill
            alt={`Cabin ${name}`}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-900/80 to-transparent"></div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10">
            {isPastBooking ? (
              <span className="flex items-center gap-2 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-lg">
                <ClockIcon className="w-4 h-4" />
                Past
              </span>
            ) : (
              <span className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-lg animate-pulse">
                <CalendarIcon className="w-4 h-4" />
                Upcoming
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow p-6 md:p-8 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-400 transition-colors">
                Cabin {name}
              </h3>
              <div className="flex items-center gap-2 bg-accent-500/20 px-3 py-1 rounded-lg">
                <HomeIcon className="w-4 h-4 text-accent-400" />
                <span className="text-accent-400 font-semibold text-sm">
                  {numNights} nights
                </span>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-primary-300">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary-400" />
                <p className="text-sm md:text-base">
                  {format(new Date(startDate), "EEE, MMM dd yyyy")}
                </p>
              </div>
              <span className="hidden sm:inline text-primary-500">→</span>
              <p className="text-sm md:text-base sm:ml-0 ml-6">
                {format(new Date(endDate), "EEE, MMM dd yyyy")}
              </p>
            </div>

            {/* Time indicator */}
            <p className="text-sm text-primary-400 mt-1 ml-6">
              {isToday(new Date(startDate))
                ? "Starting today"
                : isPastBooking
                ? `Completed ${formatDistanceFromNow(endDate)}`
                : `Starting ${formatDistanceFromNow(startDate)}`}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-3">
              <div className="p-2 bg-accent-500/20 rounded-lg">
                <CurrencyDollarIcon className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-xs text-primary-400 uppercase tracking-wide">
                  Total Price
                </p>
                <p className="text-xl font-bold text-white">${totalPrice}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-primary-800/50 rounded-xl p-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <UserGroupIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-primary-400 uppercase tracking-wide">
                  Guests
                </p>
                <p className="text-xl font-bold text-white">
                  {numGuests} {numGuests === 1 ? "guest" : "guests"}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-primary-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-primary-400">
                Booked on {format(new Date(created_at), "MMM dd, yyyy")}
              </p>

              {/* Action Buttons */}
              {!isPastBooking && (
                <div className="flex gap-3">
                  <Link
                    href={`/account/reservations/edit/${id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-accent-500/20 hover:bg-accent-500 text-accent-400 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm group/btn"
                  >
                    <PencilSquareIcon className="w-4 h-4" />
                    <span>Edit</span>
                  </Link>

                  <DeleteReservation onDelete={onDelete} bookingId={id} />
                </div>
              )}

              {isPastBooking && (
                <Link
                  href={`/cabins/${cabinId}`}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-700 hover:bg-accent-500 text-primary-300 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm"
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>Book Again</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;

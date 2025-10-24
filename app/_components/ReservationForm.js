"use client";
import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";
import { useReservation } from "./ReservationContext";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function ReservationForm({ cabin, user, guestName }) {
  const { range } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const totalPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    totalPrice,
    cabinId: id,
  };
  const createBookingWithData = createBooking.bind(null, bookingData);
  return (
    <div className="relative group h-full sm:w-full">
      <div className="relative h-full flex flex-col bg-gradient-to-br from-primary-900/98 via-primary-950/98 to-primary-900/98 backdrop-blur-2xl border-2 border-accent-500 rounded-2xl overflow-hidden transition-all duration-500">
        {/* Enhanced User Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-accent-600/25 via-accent-500/25 to-accent-600/25 backdrop-blur-sm px-6 py-5 border-b-2 border-accent-500/20">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-8 bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600 rounded-full"></div>
                <div className="w-0.5 h-5 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 ">
                <span className="text-2xl">👤</span>
                <span className="text-accent-300 md:hidden font-black text-sm uppercase tracking-widest">
                  Booking as
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-white font-semibold text-lg tracking-tight">
                {guestName}
              </span>
              <div className="relative group/avatar">
                <img
                  referrerPolicy="no-referrer"
                  className="relative h-12 w-12 rounded-full border-3 border-accent-400 shadow-2xl ring-4 ring-accent-500/50 group-hover/avatar:scale-110 transition-transform duration-300"
                  src={user.image}
                  alt={user.name}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <form
          action={(formData) => {
            createBookingWithData(formData);
          }}
          className="p-8 space-y-8 flex-1 flex flex-col"
        >
          <div className="space-y-4">
            <label
              htmlFor="numGuests"
              className="flex items-center gap-3 text-white font-black text-lg group/label"
            >
              <span className="text-2xl group-hover/label:scale-110 transition-transform">
                👥
              </span>
              <span className="flex items-center gap-2">
                Number of Guests
                <span className="text-sm px-2 py-0.5 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-300 font-bold">
                  Required
                </span>
              </span>
            </label>
            <div className="relative group/select">
              <select
                name="numGuests"
                id="numGuests"
                className="relative w-full px-5 py-4 bg-primary-900/70 border-2 border-accent-500/30 text-white rounded-xl focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/30 transition-all font-bold text-base appearance-none cursor-pointer hover:border-accent-500/50"
                required
              >
                <option value="" className="bg-primary-900">
                  Select number of guests...
                </option>
                {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
                  (x) => (
                    <option
                      value={x}
                      key={x}
                      className="bg-primary-900 font-semibold"
                    >
                      {x} {x === 1 ? "guest" : "guests"}
                    </option>
                  )
                )}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-accent-400 group-hover/select:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label
              htmlFor="observations"
              className="flex items-center gap-2.5 text-white font-black text-lg group/label"
            >
              <span className="text-3xl group-hover/label:scale-110 transition-transform">
                ✨
              </span>
              <span className="flex items-center gap-2">
                Special Requests
                <span className="text-sm px-2 py-1 bg-primary-700/50 border border-primary-600/50 rounded-full text-primary-400 font-bold">
                  Optional
                </span>
              </span>
            </label>
            <div className="relative group/textarea">
              <textarea
                name="observations"
                id="observations"
                rows={6}
                className="relative w-full px-5 py-4 bg-primary-900/70 border-2 border-accent-500/30 text-white rounded-xl focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/30 transition-all resize-none font-medium text-sm placeholder:text-primary-400 hover:border-accent-500/50 leading-relaxed"
                placeholder="Any pets, allergies, special requirements, etc.?"
              />
            </div>
          </div>

          {/* Action */}
          <div className="mt-auto">
            {!(startDate && endDate) ? (
              <div className="relative overflow-hidden text-center py-4 bg-gradient-to-br from-primary-900/60 to-primary-950/60 rounded-2xl border-2 border-dashed border-accent-500/40 hover:border-accent-500/60 transition-all">
                <p className="text-primary-200 text-base font-black flex items-center justify-center gap-2">
                  <span className="text-xl">📅</span>
                  Select your dates to continue
                </p>
              </div>
            ) : (
              <Button />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="relative w-full group overflow-hidden rounded-2xl disabled:cursor-not-allowed disabled:opacity-70 bg-accent-600/90 hover:bg-accent-600/100 transition-colors duration-300 shadow-lg hover:shadow-xl"
      disabled={pending}
    >
      {/* Button content */}
      <div className="relative px-6 py-4 flex items-center justify-center gap-3 text-white text-base font-black transition-transform duration-300">
        {pending ? (
          <>
            <SpinnerMini />
            <span className="tracking-wide">Processing Your Booking...</span>
          </>
        ) : (
          <>
            <span className="text-xl">✨</span>
            <span className="tracking-wide">Confirm Reservation</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </>
        )}
      </div>
    </button>
  );
}

export default ReservationForm;

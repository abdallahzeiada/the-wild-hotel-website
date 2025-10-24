"use client";
import { useFormStatus } from "react-dom";
import { updateReservation } from "../_lib/actions";
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

function UpdateReservationForm({ booking, reservationId, maxCapacity }) {
  return (
    <form
      className="space-y-6"
      action={updateReservation}
    >
      <input type="hidden" name="reservationId" value={reservationId} />
      
      {/* Number of Guests */}
      <div className="group space-y-3 animate-slideUp delay-100">
        <label 
          htmlFor="numGuests"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <UserGroupIcon className="w-5 h-5 text-accent-400" />
          Number of Guests
          <span className="ml-auto text-xs bg-primary-700 px-2 py-1 rounded-full text-primary-300">
            Max: {maxCapacity}
          </span>
        </label>
        <div className="relative">
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={booking.numGuests}
            className="px-5 py-4 bg-primary-800 border-2 border-primary-700 text-white w-full shadow-sm rounded-xl 
            hover:border-primary-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 
            transition-all duration-300 focus:outline-none group-hover:shadow-lg cursor-pointer
            appearance-none"
            required
          >
            <option value="" disabled>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p className="text-xs text-primary-400 flex items-center gap-1">
          <span>Choose how many guests will be staying in the cabin</span>
        </p>
      </div>

      {/* Observations */}
      <div className="group space-y-3 animate-slideUp delay-200">
        <label 
          htmlFor="observations"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-400" />
          Special Requests & Observations
        </label>
        <div className="relative">
          <textarea
            name="observations"
            id="observations"
            defaultValue={booking.observations}
            rows={5}
            className="px-5 py-4 bg-primary-800 border-2 border-primary-700 text-white w-full shadow-sm rounded-xl 
            hover:border-primary-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 
            transition-all duration-300 focus:outline-none group-hover:shadow-lg resize-none"
            placeholder="Any special requests, dietary requirements, accessibility needs, or additional information we should know about your stay..."
          />
        </div>
        <p className="text-xs text-primary-400 flex items-center gap-1">
          <span>Let us know if you have any special requirements or requests</span>
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-primary-700/50 animate-slideUp delay-300">
        <div className="text-sm text-primary-400 order-2 sm:order-1">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Changes will be saved immediately
          </span>
        </div>
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group relative px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl 
      shadow-lg hover:shadow-accent-500/50 transition-all duration-300 
      disabled:cursor-not-allowed disabled:bg-primary-700 disabled:text-primary-400 disabled:shadow-none
      hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto order-1 sm:order-2"
      disabled={pending}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-accent-400/0 via-white/20 to-accent-400/0 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
      <span className="relative flex items-center justify-center gap-2">
        {pending ? (
          <>
            <ArrowPathIcon className="w-5 h-5 animate-spin" />
            Updating Reservation...
          </>
        ) : (
          <>
            <CheckCircleIcon className="w-5 h-5" />
            Save Changes
          </>
        )}
      </span>
    </button>
  );
}

export default UpdateReservationForm;

"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-2xl py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-3 sm:gap-6 md:gap-8 items-center text-sm sm:text-base">
      <p className="flex-1">
        <span className="hidden sm:inline">👋</span> 
        <span className="text-xs sm:text-sm md:text-base">
          Don&apos;t forget to reserve your dates
          <span className="block sm:inline"> from{" "}
          {format(new Date(range.from), "MMM dd yyyy")} to{" "}
          {format(new Date(range.to), "MMM dd yyyy")}</span>
        </span>
      </p>
      <button
        className="rounded-full p-1 sm:p-1.5 hover:bg-accent-600 transition-all flex-shrink-0"
        onClick={resetRange}
      >
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;

"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
import "react-day-picker/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();
  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const { minBookingLength, maxBookingLength } = settings;
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div className="relative group h-full w-full">
      <div className="relative h-full flex flex-col bg-gradient-to-br from-primary-900/98 via-primary-950/98 to-primary-900/98 backdrop-blur-2xl border-2 border-accent-500/30 rounded-2xl overflow-hidden transition-all duration-500">
        {/* Header with decorative elements */}
        <div className="relative px-6 pt-6 pb-5 border-b border-accent-500/20 overflow-hidden">
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-8 bg-gradient-to-b from-accent-400 via-accent-500 to-accent-600 rounded-full"></div>
                <div className="w-0.5 h-5 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-3xl">📅</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Select Your Dates
                  </h3>
                </div>
                <p className="text-primary-300 text-sm font-medium ml-1">
                  Choose your perfect check-in and check-out dates
                </p>
              </div>
            </div>

            {/* Booking info pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1.5 bg-accent-500/10 border border-accent-500/30 rounded-full text-xs font-bold text-accent-300 flex items-center gap-1.5">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Min {settings.minBookingLength} nights
              </span>
              <span className="px-3 py-1.5 bg-accent-500/10 border border-accent-500/30 rounded-full text-xs font-bold text-accent-300 flex items-center gap-1.5">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Max {settings.maxBookingLength} nights
              </span>
            </div>
          </div>
        </div>

        {/* DatePicker Container with improved styling */}
        <div className="relative px-8 py-8 datepicker-container flex-1 flex items-center justify-center">
          <div className="relative w-full flex justify-center">
            <DayPicker
              animate
              mode="range"
              min={minBookingLength + 1}
              max={maxBookingLength}
              onSelect={setRange}
              selected={displayRange}
              startMonth={new Date()}
              fromDate={new Date()}
              toYear={new Date().getFullYear() + 5}
              captionLayout="dropdown"
              numberOfMonths={numberOfMonths}
              navLayout="around"
              disabled={(curDate) =>
                isPast(curDate) ||
                bookedDates.some((date) => isSameDay(date, curDate))
              }
            />
          </div>
        </div>

        {/* Enhanced Price Summary Bar */}
        <div className="relative overflow-hidden border-t-2 border-accent-500/30">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-800 via-accent-700 to-accent-600"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-transparent"></div>

          <div className="relative px-6 py-5">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                {/* Price per night - Enhanced */}
                <div className="flex items-baseline gap-1.5 group/price">
                  {discount > 0 ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl lg:text-4xl text-white/70 font-bold">
                          $
                        </span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-black text-white drop-shadow-2xl group-hover/price:scale-105 transition-transform">
                          {regularPrice - discount}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm line-through text-white/40 font-bold">
                          ${regularPrice}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl text-white/70 font-bold">
                          $
                        </span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-black text-white drop-shadow-2xl group-hover/price:scale-105 transition-transform">
                          {regularPrice}
                        </span>
                      </div>
                      <span className="text-xs text-white/90 font-black uppercase tracking-wider hidden lg:block">
                        per night
                      </span>
                    </>
                  )}
                </div>

                {/* Calculation display - Enhanced */}
                {numNights ? (
                  <>
                    <div
                      className="flex items-center gap-1 backdrop-blur-md px-1 py-0.5 lg:px-4 lg:py-1.5
                     rounded-xl border-2 border-white/40 shadow-lg hover:scale-105 transition-transform"
                    >
                      <span className="text-white/60 font-black text-xl md:text-2xl">
                        ×
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-white font-black text-xl drop-shadow-lg">
                          {numNights}
                        </span>
                        <span className="text-white/90 text-xs font-black tracking-wide hidden md:block">
                          {numNights === 1 ? "night" : "nights"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center lg:gap-1.5 backdrop-blur-sm px-1.5 py-0.5 lg:px-4 lg:py-1.5 rounded-xl border-2 border-white/30 hover:border-white/40 transition-all">
                      <span className="text-white/80 text-sm font-bold hidden lg:block">
                        Total:
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl lg:text-2xl text-white/80 font-bold">
                          $
                        </span>
                        <span className="text-xl lg:text-2xl font-black text-white drop-shadow-2xl">
                          {cabinPrice}
                        </span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              {/* Clear button - Enhanced */}
              {range.from || range.to ? (
                <button
                  className="group/clear relative overflow-hidden hover:bg-white/20 backdrop-blur-md border-2 border-white/50 hover:border-white/80 py-2 px-2 md:px-4 rounded-xl text-xs font-black transition-all duration-300 text-white hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                  onClick={() => resetRange()}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/clear:translate-x-[100%] transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center gap-1">
                    <svg
                      className="w-4 h-4 group-hover/clear:rotate-90 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="block sm:hidden">clear</span>
                    <span className="hidden md:block">Clear Dates</span>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSelector;

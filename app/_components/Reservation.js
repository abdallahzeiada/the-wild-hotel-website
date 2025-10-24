import { auth } from "../_lib/auth";
import {
  getBookedDatesByCabinId,
  getGuest,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="relative w-full -mx-3 sm:-mx-6 md:-mx-8">
      <div className="relative p-2 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {/* Enhanced Section Header */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight px-2">
                Reserve Your{" "}
                <span className="relative inline-block">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600">
                    Dream Stay
                  </span>
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed font-medium px-2 hidden sm:block">
                Choose your dates and secure this exclusive cabin. Pay on
                arrival with{" "}
                <span className="text-accent-400 font-bold">
                  free cancellation
                </span>
                .
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">
                  Free Cancellation
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">
                  Pay on Arrival
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">
                  Instant Confirmation
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Reservation Grid */}
          <div className="grid w-full md:grid-cols-[1.2fr_1fr] gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            <DateSelector
              bookedDates={bookedDates}
              settings={settings}
              cabin={cabin}
            />
            {session?.user ? (
              <ReservationForm
                cabin={cabin}
                user={session.user}
                guestName={guest.fullName}
              />
            ) : (
              <LoginMessage />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;

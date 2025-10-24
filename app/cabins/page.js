export const metadata = {
  title: "Cabins",
};
import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600; // revalidate every 60 seconds

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative mb-8 sm:mb-10 md:mb-12 pb-6 sm:pb-8 border-b border-primary-800/30">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="mb-3 sm:mb-4">
              <span className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                Explore Our Collection
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-accent-300">
              Luxury Cabins
            </h1>
            <p className="text-primary-200 text-sm sm:text-base leading-relaxed max-w-3xl">
              Imagine waking up to beautiful mountain views, spending your days
              exploring the dark forests around, or just relaxing in your
              private hot tub under the stars. Enjoy nature&apos;s beauty in
              your own little home away from home. The perfect spot for a
              peaceful, calm vacation. Welcome to paradise.
            </p>
          </div>
          <div className="lg:mb-2 w-full lg:w-auto">
            <Filter />
          </div>
        </div>
      </div>

      {/* Cabins Grid */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

// * FCY68YD9

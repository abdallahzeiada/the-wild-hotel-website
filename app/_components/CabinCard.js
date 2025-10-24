import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <Link href={`/cabins/${id}`} className="group block">
      <div className="relative bg-gradient-to-br from-primary-900/90 to-primary-950/90 rounded-xl sm:rounded-2xl overflow-hidden border border-primary-800/30 shadow-2xl hover:shadow-accent-500/20 transition-all duration-300 hover:scale-[1.02] hover:border-accent-500/50 backdrop-blur-sm">
        {/* Image Section with Overlay */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent opacity-80"></div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm backdrop-blur-sm border border-accent-400/30">
              Save ${discount}
            </div>
          )}

          {/* Cabin Name on Image */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl">
              Cabin {name}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          {/* Capacity */}
          <div className="flex items-center gap-2 sm:gap-3 text-primary-200">
            <div className="bg-primary-800/50 p-1.5 sm:p-2 rounded-lg">
              <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-accent-400" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-primary-400">Capacity</p>
              <p className="font-semibold text-sm sm:text-base text-white">
                Up to {maxCapacity} guests
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-800/50"></div>

          {/* Price Section */}
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-xs sm:text-sm text-primary-400 mb-1">Starting from</p>
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                {discount > 0 ? (
                  <>
                    <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
                      ${regularPrice - discount}
                    </span>
                    <span className="text-base sm:text-lg line-through text-primary-600 font-medium">
                      ${regularPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
                    ${regularPrice}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-primary-400">per night</p>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm group-hover:from-accent-600 group-hover:to-accent-700 transition-all duration-300 group-hover:shadow-accent-500/50 whitespace-nowrap">
              <span className="hidden sm:inline">View Details →</span>
              <span className="sm:hidden">View →</span>
            </div>
          </div>
        </div>

        {/* Hover Effect Border Glow */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-accent-500/20 to-accent-600/20 blur-xl"></div>
        </div>
      </div>
    </Link>
  );
}

export default CabinCard;

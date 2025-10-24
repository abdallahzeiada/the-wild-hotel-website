import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-6 bg-primary-700/50 rounded w-48"></div>

      {/* Header Skeleton */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 md:p-10 shadow-xl h-48 md:h-56">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-700/50 rounded-xl"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-primary-700/50 rounded w-32"></div>
            <div className="h-10 bg-primary-700/50 rounded w-64"></div>
            <div className="h-3 bg-primary-700/50 rounded w-full max-w-md"></div>
          </div>
        </div>
      </div>

      {/* Cabin Info Card Skeleton */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Skeleton */}
          <div className="h-48 md:h-64 md:w-80 bg-primary-700/50"></div>
          
          {/* Content Skeleton */}
          <div className="flex-grow p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-700/50 rounded-lg"></div>
              <div className="space-y-2 flex-1">
                <div className="h-6 bg-primary-700/50 rounded w-32"></div>
                <div className="h-3 bg-primary-700/50 rounded w-48"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-20 bg-primary-800/50 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Card Skeleton */}
      <div className="rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl p-6 md:p-8 lg:p-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-700/50 rounded-lg"></div>
            <div className="space-y-2 flex-1">
              <div className="h-6 bg-primary-700/50 rounded w-48"></div>
              <div className="h-3 bg-primary-700/50 rounded w-64"></div>
            </div>
          </div>

          {/* Form Fields Skeleton */}
          {[1, 2].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-primary-700/50 rounded w-40"></div>
              <div className="h-14 bg-primary-800 border-2 border-primary-700 rounded-xl"></div>
            </div>
          ))}

          <div className="flex justify-end pt-6 border-t border-primary-700/50">
            <div className="h-12 bg-primary-700/50 rounded-xl w-40"></div>
          </div>
        </div>
      </div>

      {/* Spinner */}
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    </div>
  );
}

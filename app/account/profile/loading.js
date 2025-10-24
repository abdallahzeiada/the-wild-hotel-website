import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 md:p-10 shadow-xl h-48 md:h-56">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-700/50"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-primary-700/50 rounded w-32"></div>
            <div className="h-8 bg-primary-700/50 rounded w-48"></div>
            <div className="h-3 bg-primary-700/50 rounded w-full max-w-md"></div>
          </div>
        </div>
      </div>

      {/* Info Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg h-24">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-700/50 rounded-lg"></div>
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-primary-700/50 rounded w-20"></div>
                <div className="h-5 bg-primary-700/50 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
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
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-primary-700/50 rounded w-32"></div>
              <div className="h-14 bg-primary-800 border-2 border-primary-700 rounded-xl"></div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
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

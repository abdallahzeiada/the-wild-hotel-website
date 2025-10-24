import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Hero Skeleton */}
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

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg h-32">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary-700/50 rounded-lg"></div>
              <div className="h-3 bg-primary-700/50 rounded w-24"></div>
              <div className="h-8 bg-primary-700/50 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 md:p-8 shadow-lg h-28">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-700/50 rounded-xl"></div>
                <div className="space-y-2">
                  <div className="h-5 bg-primary-700/50 rounded w-32"></div>
                  <div className="h-3 bg-primary-700/50 rounded w-40"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spinner */}
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    </div>
  );
}

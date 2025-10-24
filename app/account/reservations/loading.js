import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 md:p-10 shadow-xl h-48 md:h-56">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-primary-700/50 rounded w-32"></div>
            <div className="h-10 bg-primary-700/50 rounded w-56"></div>
            <div className="h-3 bg-primary-700/50 rounded w-full max-w-md"></div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-primary-700/50 rounded-xl"></div>
            <div className="w-20 h-20 bg-primary-700/50 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Reservation Cards Skeleton */}
      <div className="space-y-4">
        <div className="h-6 bg-primary-700/50 rounded w-48 mb-4"></div>
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Skeleton */}
              <div className="h-48 md:h-64 md:w-64 bg-primary-700/50"></div>
              
              {/* Content Skeleton */}
              <div className="flex-grow p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <div className="h-6 bg-primary-700/50 rounded w-48"></div>
                  <div className="h-4 bg-primary-700/50 rounded w-64"></div>
                  <div className="h-3 bg-primary-700/50 rounded w-40"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-primary-800/50 rounded-xl"></div>
                  <div className="h-20 bg-primary-800/50 rounded-xl"></div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="h-3 bg-primary-700/50 rounded w-32"></div>
                  <div className="flex gap-3">
                    <div className="h-10 bg-primary-700/50 rounded-lg w-20"></div>
                    <div className="h-10 bg-primary-700/50 rounded-lg w-24"></div>
                  </div>
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

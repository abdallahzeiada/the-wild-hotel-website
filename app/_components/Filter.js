"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="bg-primary-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 flex flex-wrap sm:flex-nowrap border border-primary-700/50 shadow-xl justify-between items-center">
      <p className="text-sm text-accent-200 lg:hidden">Guests: </p>
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <Button
          handleFilter={handleFilter}
          filter="all"
          activeFilter={activeFilter}
        >
          All
        </Button>
        <Button
          handleFilter={handleFilter}
          filter="small"
          activeFilter={activeFilter}
        >
          <span className="hidden sm:inline">1-3 guests</span>
          <span className="sm:hidden">1-3</span>
        </Button>
        <Button
          handleFilter={handleFilter}
          filter="medium"
          activeFilter={activeFilter}
        >
          <span className="hidden sm:inline">4-7 guests</span>
          <span className="sm:hidden">4-7</span>
        </Button>
        <Button
          handleFilter={handleFilter}
          filter="large"
          activeFilter={activeFilter}
        >
          <span className="hidden sm:inline">8-12 guests</span>
          <span className="sm:hidden">8-12</span>
        </Button>
      </div>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
        filter === activeFilter
          ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white scale-105"
          : "text-primary-300 hover:text-white hover:bg-primary-800/50"
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;

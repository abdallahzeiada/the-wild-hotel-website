// import { unstable_noStore as noStore } from "next/cache";

import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  // noStore(); // the same as export const revalidate = 0
  const cabins = await getCabins();

  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;
  if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (filteredCabins.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <p className="text-lg sm:text-xl text-primary-300">
          No cabins found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;

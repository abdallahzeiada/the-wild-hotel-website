import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-content-center">
      <Spinner />
      <p className="text-xl">Loading cabin data...</p>
    </div>
  );
}

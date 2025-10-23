import UpdateReervation from "@/app/_components/UpdateReservationForm";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.reservationId;
  const booking = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(booking.cabinId);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <UpdateReervation
        booking={booking}
        maxCapacity={maxCapacity}
        reservationId={reservationId}
      />
    </div>
  );
}

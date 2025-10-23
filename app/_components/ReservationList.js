"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimisitcBookings, optimisitcDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisitcDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisitcBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;

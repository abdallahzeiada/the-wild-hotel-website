import { auth } from "../_lib/auth";
import {
  getBookedDatesByCabinId,
  getGuest,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-[1fr_1fr] mt-12 border border-primary-800 min-h-[400px]">
      <DateSelector
        bookedDates={bookedDates}
        settings={settings}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm
          cabin={cabin}
          user={session.user}
          guestName={guest.fullName}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;

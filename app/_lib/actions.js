"use server";
import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function createBooking(newBookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("Not authenticated | You must be logged in");
  const newBooking = {
    ...newBookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000) || null,
    extrasPrice: 0,
    cabinPrice: newBookingData.totalPrice,
    status: "unconfirmed",
    isPaid: false,
    hasBreakfast: false,
  };
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${newBookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("Not authenticated | You must be logged in");
  const nationalID = formData.get("nationalID");
  const fullName = formData.get("fullName");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,14}$/.test(nationalID))
    throw new Error(
      "Invalid National ID | It must be alphanumeric and between 6 to 14 characters."
    );
  const updateData = {
    nationalID,
    nationality,
    countryFlag,
    fullName,
  };
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error("Simulated error for testing purposes");
  const session = await auth();
  if (!session) throw new Error("Not authenticated | You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const bookingIds = guestBookings.map((booking) => booking.id);
  if (!bookingIds.includes(bookingId))
    throw new Error("You do not have permission to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("Not authenticated | You must be logged in");

  const reservationId = Number(formData.get("reservationId"));

  const guestBookings = await getBookings(session.user.guestId);
  const bookingIds = guestBookings.map((booking) => booking.id);
  if (!bookingIds.includes(reservationId))
    throw new Error("You do not have permission to update this booking");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", reservationId);

  if (error) throw new Error("Booking could not be updated");

  revalidatePath("/account/reservations/edit/" + reservationId);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

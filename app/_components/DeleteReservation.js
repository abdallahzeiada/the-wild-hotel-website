"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (
      confirm(
        "Are you sure you want to delete this reservation? This action cannot be undone."
      )
    )
      startTransition(() => {
        onDelete(bookingId);
      });
  }

  return (
    <button
      onClick={handleDelete}
      className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isPending}
    >
      {!isPending ? (
        <>
          <TrashIcon className="w-4 h-4" />
          <span>Delete</span>
        </>
      ) : (
        <>
          <ArrowPathIcon className="w-4 h-4 animate-spin" />
          <span>Deleting...</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;

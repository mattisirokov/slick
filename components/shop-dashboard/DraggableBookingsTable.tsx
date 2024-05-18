"use client";

import { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { useRealtimeBookings } from "@/hooks/useRealtime";
import { updateBookingStatus } from "@/server/bookings/actions";

import DraggableBookingCol from "./DraggableBookingCol";
import { BookingWithDetails } from "@/types";

interface DraggableBookingsTableProps {
  bookings: BookingWithDetails[];
}

export default function DraggableBookingsTable({
  bookings,
}: DraggableBookingsTableProps) {
  useRealtimeBookings();

  const [columns, setColumns] = useState([
    {
      title: "Incoming",
      bookings: bookings.filter((booking) => booking.status === "Incoming"),
    },
    {
      title: "In Progress",
      bookings: bookings.filter((booking) => booking.status === "In Progress"),
    },
    {
      title: "Completed",
      bookings: bookings.filter((booking) => booking.status === "Completed"),
    },
  ]);

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    // If there's no destination (dropped outside of a droppable area), do nothing
    if (!destination) return;

    const sourceColIndex = columns.findIndex(
      (col) => col.title === source.droppableId,
    );
    const destColIndex = columns.findIndex(
      (col) => col.title === destination.droppableId,
    );

    // If the source and destination columns are the same, move the item within the same column
    if (sourceColIndex === destColIndex) {
      const updatedBookings = Array.from(columns[sourceColIndex].bookings);
      const [movedBooking] = updatedBookings.splice(source.index, 1);
      updatedBookings.splice(destination.index, 0, movedBooking);
      const updatedColumns = columns.map((col, index) => {
        if (index === sourceColIndex) {
          return { ...col, bookings: updatedBookings };
        }
        return col;
      });
      setColumns(updatedColumns);
    } else {
      // If the source and destination columns are different, move the item between columns
      const sourceBookings = Array.from(columns[sourceColIndex].bookings);
      const destBookings = Array.from(columns[destColIndex].bookings);
      const [movedBooking] = sourceBookings.splice(source.index, 1);
      destBookings.splice(destination.index, 0, movedBooking);
      const updatedColumns = columns.map((col, index) => {
        if (index === sourceColIndex) {
          return { ...col, bookings: sourceBookings };
        }
        if (index === destColIndex) {
          return { ...col, bookings: destBookings };
        }
        return col;
      });
      setColumns(updatedColumns);

      // Update the booking status in the database
      await updateBookingStatus(movedBooking.id, destination.droppableId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={"flex h-[90vh] w-full flex-row justify-between gap-2"}>
        {columns.map((col) => (
          <DraggableBookingCol
            key={col.title}
            title={col.title}
            bookings={col.bookings}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

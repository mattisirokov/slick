"use client";

import { Droppable } from "@hello-pangea/dnd";
import DraggableBookingItem from "./DraggableBookingItem";
import { BookingWithDetails } from "@/types";

interface DraggableBookingColProps {
  title: string;
  bookings: BookingWithDetails[];
}

export default function DraggableBookingCol({
  title: heading,
  bookings,
}: DraggableBookingColProps) {
  return (
    <div className={"flex h-full w-full flex-col items-center rounded-md"}>
      <p className={"mb-4 mt-2 text-xl font-semibold"}>{heading}</p>
      <Droppable droppableId={heading}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              "flex w-full flex-col gap-4 rounded-md border-2 bg-gray-100 pb-8 pl-4 pr-4 pt-8"
            }
          >
            {bookings.map((booking, index) => (
              <DraggableBookingItem
                key={booking.id}
                booking={booking}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

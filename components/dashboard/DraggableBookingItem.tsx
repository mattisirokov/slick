"use client";

import { Draggable } from "@hello-pangea/dnd";
import { BookingWithDetails } from "@/types";

interface DraggableBookingItemProps {
  booking: BookingWithDetails;
  index: number;
}

export default function DraggableBookingItem({
  booking,
  index,
}: DraggableBookingItemProps) {
  const draggableID = booking.id.toString();

  return (
    <Draggable draggableId={draggableID} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={"w-full border-2 bg-blue-100 p-4"}
        >
          <p>{booking.shop_service_id.service_name}</p>
          <p>{booking.id}</p>
        </div>
      )}
    </Draggable>
  );
}

"use client";

import { Draggable } from "@hello-pangea/dnd";

import { formatTimeStampToTime } from "@/utils/booking-system/date-utils";
import { BookingWithDetails } from "@/types";
import { DraggableItemModal } from "@/components/dashboard/DraggableItemModal";

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
          className={"relative flex flex-col items-start border-2 bg-white p-4"}
        >
          <p className={"text-md mb-1 font-semibold"}>
            {formatTimeStampToTime(booking.booking_start_date)}
          </p>
          <p className={"text-md mb-2 font-semibold"}>
            {booking.shop_service_id.service_name}
          </p>
          {booking.vehicle_id && (
            <div className={"flex flex-row gap-1"}>
              <p>Vehicle details: </p>
              <p>{booking.vehicle_id.make}</p>
              <p>{booking.vehicle_id.model}</p>
              <p>{booking.vehicle_id.registration_number}</p>
            </div>
          )}
          <div>
            <p>Customer info</p>
            <p>
              {booking.user_id.first_name} {booking.user_id.surname}
            </p>
            {booking.customer_notes && (
              <p className={"text-md mb-2 font-semibold"}>
                Customer notes: {booking.customer_notes}
              </p>
            )}
          </div>
          <DraggableItemModal booking={booking} />
        </div>
      )}
    </Draggable>
  );
}

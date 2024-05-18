import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookingWithDetails } from "@/types";

interface DraggableItemModalProps {
  booking: BookingWithDetails;
}

export function DraggableItemModal({ booking }: DraggableItemModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={"absolute h-full w-full"} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Booking ID ${booking.id}`}</DialogTitle>
          <DialogDescription>
            Here are the booking details for booking ID {booking.id}
          </DialogDescription>
        </DialogHeader>
        {booking.customer_notes && (
          <p className={"text-md mb-2 font-semibold"}>
            Customer notes: {booking.customer_notes}
          </p>
        )}
        {booking.vehicle_id && (
          <div className={"flex flex-col gap-1"}>
            <p>Vehicle details: </p>
            <p>{booking.vehicle_id.make}</p>
            <p>{booking.vehicle_id.model}</p>
            <p>{booking.vehicle_id.registration_number}</p>
          </div>
        )}
        <Label htmlFor="booking-notes">Shop notes</Label>
        <Textarea
          id="booking-notes"
          defaultValue={booking.shop_notes}
          placeholder="Enter shop notes here"
        />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

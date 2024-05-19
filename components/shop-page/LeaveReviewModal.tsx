"use client";

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
import LeaveReviewForm from "./LeaveReviewForm";
import { useState } from "react";

interface LeaveReviewModalProps {
  shopID: number;
  userID: string | undefined;
}

export function LeaveReviewModal({ shopID, userID }: LeaveReviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Leave a review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`Booking ID `}</DialogTitle>
          <DialogDescription>
            Here are the booking details for booking ID
          </DialogDescription>
        </DialogHeader>

        <LeaveReviewForm
          customerId={userID}
          shopId={shopID}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}

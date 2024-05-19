import { redirect } from "next/navigation";

import { getBookingsForRepairShop } from "@/server/bookings/actions";
import {
  getUser,
  getRepairShopAssociatedWithUser,
} from "@/server/user-authentication/actions";

import DraggableBookingsTable from "@/components/shop-dashboard/DraggableBookingsTable";
import BookingsTableVIewSwitch from "@/components/shop-dashboard/BookingsTableVIewSwitch";
import { BookingsTable } from "@/components/shop-dashboard/BookingsTable";

export default async function Page({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  const user = await getUser();

  const repairShop = await getRepairShopAssociatedWithUser();
  const bookings = await getBookingsForRepairShop(repairShop.id);

  if (user === null || !repairShop) {
    return redirect("/login");
  }

  const displayDraggableTable = searchParams.view !== "normal";

  return (
    <div
      className={
        "flex h-full w-full flex-col items-start justify-start overflow-hidden p-12"
      }
    >
      <div className={"flex w-full flex-row justify-between"}>
        <p className={"mb-6 animate-fadeInUp text-3xl  font-bold"}>Bookings</p>
        <BookingsTableVIewSwitch />
      </div>
      <div className={"h-full w-full animate-fadeInUp "}>
        {displayDraggableTable ? (
          <DraggableBookingsTable bookings={bookings} />
        ) : (
          <BookingsTable bookings={bookings} />
        )}
      </div>
    </div>
  );
}

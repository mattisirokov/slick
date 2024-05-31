import { getShopsMonthlyEarnings } from "@/server/repair-shops/actions";

import { Button } from "../ui/button";
import { getPreviousMonthBookingsTotal } from "@/server/repair-shops/actions";
import { calculatePercentageChange } from "@/utils/booking-system/calculations";

interface CurrentMonthEarningsProps {
  repairShopID: number;
}

export default async function CurrentMonthEarnings({
  repairShopID: shopID,
}: CurrentMonthEarningsProps) {
  const currentMonthEarnings = await getShopsMonthlyEarnings(shopID);
  const previousMonthEarnings = await getPreviousMonthBookingsTotal(shopID);

  const percentageChange = calculatePercentageChange(
    previousMonthEarnings,
    currentMonthEarnings,
  );

  let message;
  if (percentageChange > 0) {
    message = (
      <>
        You're up <span className="text-green-500">{percentageChange}%</span> in
        sales since last month!
      </>
    );
  } else if (percentageChange < 0) {
    message = (
      <>
        You're down{" "}
        <span className="text-red-500">{Math.abs(percentageChange)}%</span> in
        sales since last month.
      </>
    );
  } else {
    message = `Your sales are the same as last month.`;
  }

  return (
    <div className={"rounded-md bg-white pb-6 pl-10 pr-10 pt-10"}>
      <div className={"flex h-full flex-col items-start justify-between"}>
        <div>
          <p className={"text-md mb-12 text-xl font-bold"}>
            Current month earnings
          </p>
          <p className={"mb-8 text-5xl font-thin"}>{currentMonthEarnings}€</p>
          <p className={"mb-8 font-thin"}>{message}</p>
        </div>
        <Button variant={"secondary"}>See all payouts</Button>
      </div>
    </div>
  );
}

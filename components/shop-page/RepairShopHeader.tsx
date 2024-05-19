import React from "react";
import Image from "next/image";

import { getShopBannerImageUrl } from "@/server/repair-shops/actions";
import { getUser } from "@/server/user-authentication/actions";
import { allowUserToLeaveReview } from "@/server/customer-review/actions";

import AddToFavorites from "../buttons/AddToFavorites";

interface RepairShopHeaderProps {
  shopID: number;
  shopName: string;
  shopCity: string;
  leaveReviewModal: React.ReactNode;
}
export default async function RepairShopHeader({
  shopID,
  shopName,
  shopCity,
  leaveReviewModal,
}: RepairShopHeaderProps) {
  const imageSource = await getShopBannerImageUrl(shopID);
  const user = await getUser();

  const displayLeaveReviewModal = await allowUserToLeaveReview(
    shopID,
    user?.user_id,
  );

  return (
    <div
      className={
        "relative mt-4 flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2"
      }
    >
      <Image
        src={imageSource}
        alt={shopName}
        width={800}
        height={400}
        className={"absolute left-0 top-0 h-full w-full object-cover"}
      />
      <div
        className={
          "absolute bottom-0 z-10 flex h-[20%] w-[95%] flex-row items-center justify-between"
        }
      >
        <div className={"flex flex-col justify-center gap-2"}>
          <p className={"text-white"}>
            {shopName} - {shopCity}
          </p>
          <h1 className={"text-5xl text-white"}>{shopName}</h1>
        </div>
        <div className={"flex flex-row items-center justify-center gap-4"}>
          {displayLeaveReviewModal && leaveReviewModal}
          <AddToFavorites shopID={shopID} />
        </div>
      </div>

      <div
        className={"absolute bottom-0 z-0 h-full w-full p-4 text-white"}
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
        }}
      />
    </div>
  );
}

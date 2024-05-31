import { getUser } from "@/server/user-authentication/actions";
import { getShopById } from "@/server/repair-shops/actions";

import PageLayout from "@/components/layouts/PageLayout";
import RepairShopHeader from "@/components/shop-page/RepairShopHeader";
import AboutShop from "@/components/shop-page/AboutShop";
import ShopServices from "@/components/shop-page/ShopServices";
import CustomerReviews from "@/components/shop-page/CustomerReviews";
import RepairShopLocationMap from "@/components/shop-page/RepairShopLocationMap";
import { LeaveReviewModal } from "@/components/shop-page/LeaveReviewModal";

export const revalidate = 0;

export default async function RepairShopPage({
  params,
}: {
  params: { id: number };
}) {
  const shop = await getShopById(params.id);
  const user = await getUser();

  return (
    <PageLayout>
      <main className="flex w-full max-w-[70%] flex-1 flex-col items-center">
        <RepairShopHeader
          shopID={shop.id}
          shopName={shop.name}
          shopCity={shop.city}
          leaveReviewModal={
            <LeaveReviewModal shopID={shop.id} userID={user?.user_id} />
          }
        />
        <AboutShop
          heading={"About us"}
          description={shop.description}
          buttons={[
            { title: "Contact us", variant: "default", size: "lg" },
            { title: "Send us a message", variant: "secondary", size: "lg" },
          ]}
        />
        <div className={"borxpder-b-2 w-full border-gray-200"} />
        <ShopServices
          heading={"Shop services"}
          description={
            "We offer a wide range of services, from oil changes to engine rebuilds, we have you covered"
          }
          repairShop={shop}
          user={user}
        />
        <CustomerReviews
          heading={"Customer reviews"}
          description={"Welcome to our repair shop, heres some testemonials"}
          shopID={shop.id}
        />
        <RepairShopLocationMap shop={shop} />
      </main>
    </PageLayout>
  );
}

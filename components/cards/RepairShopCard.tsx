import { getShopBannerImageUrl } from "@/server/repair-shops/actions";
import { getShopServices } from "@/server/shop-services/actions";

import Image from "next/image";
import CardStatusBadge from "./CardStatusBadge";
import CardServiceList from "./CardServiceList";
import Link from "next/link";

interface RepairShopCardProps {
  shopID: number;
  name: string;
  description: string;
  status: string;
  imageURL: string;
}

export default async function RepairShopCard({
  shopID,
  name,
  status,
  description,
  imageURL,
}: RepairShopCardProps) {
  const services = await getShopServices(shopID);
  const imageSource = await getShopBannerImageUrl(shopID);

  return (
    <Link href={`/repair-shops/${shopID}`}>
      <div className="card mr-6 h-full overflow-hidden rounded-xl border-2 border-gray-100 bg-white">
        <div className={"relative"}>
          <Image
            src={imageSource}
            alt="Shop image"
            width={800}
            height={500}
            className={"h-[200px] object-cover"}
          />
          <div className={"absolute right-5 top-5"}>
            <CardStatusBadge status={status as any} />
          </div>
        </div>
        <div className="h-full p-4">
          <h2 className="mb-4 text-xl font-semibold">{name}</h2>
          <div className={"mb-3"}>
            <CardServiceList services={services} />
          </div>
          <p className={"font-light opacity-50"}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

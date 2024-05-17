import { getBookingsForRepairShop } from "@/server/bookings/actions";
import { getSpecificShopServices } from "@/server/repair-shops/actions";

import SelectTimeModal from "../booking/SelectTimeModal";

import { RepairShop } from "@/types";

interface ShopServiceProps {
  heading: string;
  description: string;
  repairShop: RepairShop;
}

export default async function ShopServices({
  heading,
  description,
  repairShop,
}: ShopServiceProps) {
  const services = await getSpecificShopServices(repairShop.id);
  const bookings = await getBookingsForRepairShop(repairShop.id);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container flex flex-col items-start">
        <div className="md:mb-18 mb-12 w-full max-w-lg lg:mb-10">
          <h1 className="mb-3 text-4xl md:mb-3 md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {services.map((service, index) => (
            <div
              key={`${service.service_name}-${index}`}
              className={"h-full rounded-md border-2 border-gray-200 p-6"}
            >
              <h3 className="mb-5 text-xl font-semibold md:mb-6 md:text-2xl">
                {service.service_name}
              </h3>
              <p className="mb-5 md:mb-6">{service.description}</p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                <SelectTimeModal
                  shop={repairShop}
                  service={service}
                  bookings={bookings}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { redirect } from "next/navigation";

import { getCustomerVehicles } from "@/server/customer-vehicles/actions";
import { getUser } from "@/server/user-authentication/actions";

import AddNewVehicleModal from "@/components/customer-dashboard/AddNewVehicleModal";
import VehiclesTable from "@/components/customer-dashboard/VehiclesTable";
import AddNewVehicleForm from "@/components/customer-dashboard/AddNewVehicleForm";

export default async function CustomerVehicles() {
  const user = await getUser();

  if (user == null) {
    return redirect("/login");
  }

  const customerVehicles = await getCustomerVehicles(user.user_id);

  return (
    <div
      className={
        "flex h-full min-h-screen w-full flex-col items-start justify-start bg-slate-100 p-12"
      }
    >
      <div className={"flex w-full flex-row items-start justify-between"}>
        <p className={"mb-6 animate-fadeInUp text-3xl font-bold"}>Vehicles</p>
        <AddNewVehicleModal
          children={<AddNewVehicleForm customerId={user.user_id} />}
        />
      </div>
      <VehiclesTable vehicles={customerVehicles} />
    </div>
  );
}

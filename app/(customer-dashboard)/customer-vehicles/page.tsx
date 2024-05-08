import { redirect } from "next/navigation";

import { getCustomerVehicles } from "@/server/customer-vehicles/actions";
import { getUser } from "@/server/user-authentication/actions";

import { CustomerVehicle } from "@/types";
import AddNewVehicleModal from "@/components/customer-dashboard/AddNewVehicleModal";

export default async function CustomerVehicles() {
  const user = await getUser();

  if (user == null) {
    return redirect("/login");
  }

  const customerVehicles = await getCustomerVehicles(user.user_id);

  return (
    <div
      className={"flex min-h-screen h-full w-full flex-col items-start justify-start p-12 bg-slate-100"}
    >
      <div className={"flex w-full flex-row justify-between items-start"}>
        <p className={"mb-6 animate-fadeInUp text-3xl font-bold"}>Vehicles</p>
        <AddNewVehicleModal customerId={user.user_id}/>
      </div>
      <div className={"h-full w-full animate-fadeInUp "}>
        {customerVehicles.map((vehicle: CustomerVehicle) => (
          <div key={vehicle.id}>
            <h3>
              Vehicle name: {vehicle.make} {vehicle.model}
            </h3>
            <div>Registration number: {vehicle.registration_number}</div>
            <div>Manufactured in {vehicle.year_manufactured}</div>
            <div>Decription: {vehicle.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

import DashboardNavigation from "@/components/shop-dashboard/DashboardNavigation";

const repairShopDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className={"flex flex-row items-start justify-start"}>
      <DashboardNavigation />
      {children}
    </main>
  );
};

export default repairShopDashboardLayout;

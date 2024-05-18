import Link from "next/link";
import { redirect } from "next/navigation";

import { getUser } from "@/server/user-authentication/actions";
import DashboardNavigationItem from "@/components/dashboard/DashboardNavigationItem";

export default async function DashboardNavigation() {
  const user = await getUser();

  if (user == null) {
    return redirect("/login");
  }

  const commonNavigationLinks = [
    {
      title: "Dashboard",
      href: user.shop_owner ? "/shop-dashboard" : "/customer-dashboard",
    },
    {
      title: "Bookings",
      href: user.shop_owner ? "/shop-bookings" : "/customer-bookings",
    },
    {
      title: "Inbox",
      href: user.shop_owner ? "/shop-inbox" : "/customer-inbox",
    },
  ];

  const customerNavigationLinks = [
    ...commonNavigationLinks,
    {
      title: "Vehicles",
      href: "/customer-vehicles",
    },
  ];

  const navigationLinks = user.shop_owner
    ? commonNavigationLinks
    : customerNavigationLinks;

  return (
    <div className="sticky top-0 flex h-screen min-w-[10%] flex-col items-center bg-white pb-12 pt-12">
      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <Link href="/" className={"text-2xl font-bold"}>
            Slick
          </Link>
          <div className="flex w-full flex-col items-start justify-center gap-8">
            {navigationLinks.map((link) => (
              <DashboardNavigationItem
                key={link.title}
                title={link.title}
                href={link.href}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <DashboardNavigationItem title={"settings"} href={"/shop-settings"} />
          <DashboardNavigationItem title={"logout"} href={"/logout"} />
        </div>
      </div>
    </div>
  );
}

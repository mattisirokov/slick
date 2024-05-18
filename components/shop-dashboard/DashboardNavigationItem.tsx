"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardNavigationItemProps {
  title: string;
  href: string;
}

export default function DashboardNavigationItem({
  title,
  href,
}: DashboardNavigationItemProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={
        "margin-auto relative flex w-full flex-row items-center justify-center"
      }
    >
      <div className={`${isActive ? "text-green-400" : ""}`}>
        <p className={""}>{title}</p>
      </div>
    </Link>
  );
}

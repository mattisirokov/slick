"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Switch } from "../ui/switch";

export default function BookingsTableVIewSwitch() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSwitchToggle = () => {
    const params = new URLSearchParams(searchParams);
    const view = params.get("view") === "normal" ? "draggable" : "normal";
    params.set("view", view);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={"flex flex-row items-center gap-3"}>
      <p className={"text-gray-500"}>Draggable Table</p>
      <Switch
        onCheckedChange={handleSwitchToggle}
        checked={new URLSearchParams(searchParams).get("view") === "normal"}
      />
      <p className={"text-gray-500"}>Normal Table</p>
    </div>
  );
}

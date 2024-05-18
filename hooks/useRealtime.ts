import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

function useRealtimeMessages() {
  const router = useRouter();

  const changes = createClient()
    .channel("messages")
    .on(
      "postgres_changes",
      {
        schema: "public",
        event: "*",
        table: "Messages",
      },
      () => {
        router.refresh();
      },
    )
    .subscribe();

  return () => {
    changes.unsubscribe();
  };
}

function useRealtimeBookings() {
  const router = useRouter();

  const changes = createClient()
    .channel("bookings")
    .on(
      "postgres_changes",
      {
        schema: "public",
        event: "*",
        table: "Bookings",
      },
      () => {
        router.refresh();
      },
    )
    .subscribe();

  return () => {
    changes.unsubscribe();
  };
}

export { useRealtimeMessages, useRealtimeBookings };

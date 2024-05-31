"use server";

import { createClient } from "@/utils/supabase/client";
import { CustomerReviewWithDetails } from "@/types";

export async function getRepairShopReviews(
  shopID: number,
): Promise<CustomerReviewWithDetails[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("Customer Reviews")
    .select(`*, user_id("*")`)
    .eq("repair_shop_id", shopID);

  if (error || !data) {
    console.error("Error fetching reviews:", error);
    return [];
  }

  return data;
}

// Check if user has already left a review for this shop...
// Also, don't allow user to leave a review if they are a shop owner
// or if they are not logged in ie. user_id is undefined

export async function allowUserToLeaveReview(
  shopID: number,
  userID: string | undefined,
): Promise<boolean> {
  if (!userID) {
    return false;
  }

  const supabase = await createClient();

  // Check if the user is a shop owner

  const { data: userData, error: userError } = await supabase
    .from("User Profiles")
    .select("shop_owner")
    .eq("user_id", userID)
    .single();

  if (userError || !userData) {
    console.error("Error fetching user data:", userError);
    return false;
  }

  if (userData.shop_owner === true) {
    return false;
  }

  // Check if the user has made a booking

  const { data: bookingData, error: bookingError } = await supabase
    .from("Bookings")
    .select("id")
    .eq("user_id", userID);

  if (bookingError || !bookingData || bookingData.length === 0) {
    console.error(
      "Error fetching bookings or no bookings found:",
      bookingError,
    );
    return false;
  }

  // Check if the user has already left a review for this shop

  const { data: reviewData, error: reviewError } = await supabase
    .from("Customer Reviews")
    .select("id")
    .eq("repair_shop_id", shopID)
    .eq("user_id", userID);

  if (reviewError || !reviewData) {
    console.error("Error fetching reviews:", reviewError);
    return false;
  }

  return reviewData.length === 0;
}

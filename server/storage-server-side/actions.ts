"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/client";

export default async function deleteBanner(shopID: number) {
  "use server";
  const supabase = createClient();
  const bucket = "Shop Banners";

  // Get the repair shop
  const { data: repairShop, error: getError } = await supabase
    .from("Repair Shops")
    .select("banner_img_url")
    .eq("id", shopID)
    .single();

  if (getError) {
    console.log("Error getting repair shop: ", getError.message);
    return;
  }

  // Delete the banner image from the bucket
  const { data, error: deleteError } = await supabase.storage
    .from(bucket)
    .remove([repairShop.banner_img_url]);

  if (deleteError) {
    console.log("Error deleting file: ", deleteError.message);
    return;
  }

  // Update the repair shop
  const { data: updatedShop, error: updateError } = await supabase
    .from("Repair Shops")
    .update({ banner_img_url: null })
    .eq("id", shopID);

  if (updateError) {
    console.log("Error updating repair shop: ", updateError.message);
    return;
  }

  revalidatePath("/shop-settings");
}

export const uploadNewShopBanner = async (event: any, shopId: number) => {
  const supabase = createClient();
  const file = event.target.files[0];
  const bucket = "Shop Banners";

  // const router = useRouter();

  const uniqueFileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(uniqueFileName, file);

  if (error) {
    console.log("Error uploading file: ", error.message);
    return;
  }

  const { data: updateData, error: updateError } = await supabase
    .from("Repair Shops")
    .update({ banner_img_url: data.path })
    .eq("id", shopId);

  if (updateError) {
    console.log("Error updating repair shop: ", updateError.message);
    return;
  }
};

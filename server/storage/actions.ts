"use client";

import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";

export const uploadNewUserAvatar = async (event: any, userId: number) => {
  const supabase = createClient();
  const file = event.target.files[0];
  const bucket = "User Avatars";

  const uniqueFileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(uniqueFileName, file);

  if (error) {
    console.log("Error uploading file: ", error.message);
    return;
  }

  const { data: updateData, error: updateError } = await supabase
    .from("User Profiles")
    .update({ avatar_url: data.path })
    .eq("id", userId);

  if (updateError) {
    console.log("Error updating user profile: ", updateError.message);
    return;
  }

  toast.success("Image uploaded and user profile updated successfully!");
};

// delete user avatar

export const deleteUserAvatar = async (userId: number) => {
  const supabase = createClient();
  const bucket = "User Avatars";

  // Get the user profile
  const { data: userProfile, error: getError } = await supabase
    .from("User Profiles")
    .select("avatar_url")
    .eq("id", userId)
    .single();

  if (getError) {
    console.log("Error getting user profile: ", getError.message);
    return;
  }

  const { data, error: deleteError } = await supabase.storage
    .from(bucket)
    .remove([userProfile.avatar_url]);

  if (deleteError) {
    console.log("Error deleting file: ", deleteError.message);
    return;
  }

  // Update the user profile
  const { data: updatedProfile, error: updateError } = await supabase
    .from("User Profiles")
    .update({ avatar_url: null })
    .eq("id", userId);

  if (updateError) {
    console.log("Error updating user profile: ", updateError.message);
    return;
  }

  toast.success("Image deleted and user profile updated successfully!");
};

"use client";

import { createClient } from "@/utils/supabase/client";
import { UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface UploadShopBannerProps {
  shopId: number;
}

export default function UploadShopBanner({ shopId }: UploadShopBannerProps) {
  const router = useRouter();

  const handleUploadImage = async (event: any) => {
    const supabase = createClient();
    const file = event.target.files[0];
    const bucket = "Shop Banners";

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

    toast.success("Image uploaded and repair shop updated successfully!");
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="m-auto flex max-w-[95%] flex-col items-center justify-center pb-6 pt-5 text-center">
          <UploadIcon size={24} className="mb-4" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input type="file" className="hidden" onChange={handleUploadImage} />
      </label>
    </div>
  );
}

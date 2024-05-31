import Image from "next/image";
import UploadShopBanner from "./UploadShopBanner";
import { useGetStorageAssets } from "@/hooks/useGetStorageAssets";
import { SubmitButton } from "../buttons/SubmitButton";
import { TrashIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";
import deleteBanner from "@/server/storage-server-side/actions";

interface EditShopBannerProps {
  shopID: number;
  bannerURL: string;
}

export default async function EditShopBanner({
  shopID,
  bannerURL,
}: EditShopBannerProps) {
  const { getRepairShopBanner } = useGetStorageAssets();
  const imageURL = getRepairShopBanner(bannerURL);

  const displayUploadOption = imageURL == null;

  const handleDelete = async () => {
    "use server";
    await deleteBanner(shopID);
  };

  return (
    <div className={"flex w-full flex-row gap-12"}>
      <div className={"flex flex-col items-start"}>
        <p className={"mb-2"}>Upload banner</p>
        {displayUploadOption === true ? (
          <UploadShopBanner shopId={shopID} />
        ) : (
          <form>
            <Image
              src={imageURL}
              alt={"Shop Banner Image"}
              width={100}
              height={200}
              className={"mb-2 h-[200px] w-[200px] rounded-md"}
            />
            <SubmitButton
              className={
                "border-md flex flex-row gap-2 bg-red-500 p-2 text-white"
              }
              pendingText={"deleting"}
              formAction={handleDelete}
            >
              <TrashIcon /> Delete
            </SubmitButton>
          </form>
        )}
      </div>
    </div>
  );
}

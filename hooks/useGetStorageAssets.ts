export const useGetStorageAssets = () => {
  const getSpecificWebsiteAsset = (
    folder: "Home" | "Browse",
    assetName: string,
  ) => {
    return `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/Website%20Assets/${folder}/${assetName}`;
  };

  const getUserProfileImage = (avatarURL: string | undefined) => {
    if (!avatarURL) {
      return "https://placehold.co/100x100";
    }
    return `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/User%20Avatars/${avatarURL}`;
  };

  const getRepairShopBanner = (
    bannerURL: string | undefined,
  ): string | null => {
    if (!bannerURL) {
      return null;
    }

    return `${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_URL}/Shop%20Banners/${bannerURL}`;
  };
  return {
    getSpecificWebsiteAsset,
    getUserProfileImage,
    getRepairShopBanner,
  };
};

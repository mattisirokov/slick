import Image from "next/image";

import { getRepairShopReviews } from "@/server/customer-review/actions";
import { useGetStorageAssets } from "@/hooks/useGetStorageAssets";

import { StarFilledIcon } from "@radix-ui/react-icons";

interface CustomerReviewProps {
  heading: string;
  description: string;
  shopID: number;
}

export default async function CustomerReviews({
  heading,
  description,
  shopID,
}: CustomerReviewProps) {
  const { getUserProfileImage } = useGetStorageAssets();

  const customerReviews = await getRepairShopReviews(shopID);

  const getCustomerAvatar = (avatarURL: string | undefined) => {
    if (!avatarURL) {
      return "https://placehold.co/100x100";
    }
    return getUserProfileImage(avatarURL);
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="md:mb-18 mx-auto mb-12 w-full max-w-lg text-center lg:mb-20">
          <h1 className="mb-3 text-4xl md:mb-3 md:text-4xl lg:text-4xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3">
          {customerReviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-8 inline-block w-full rounded-md border border-gray-300 p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, index) => (
                      <StarFilledIcon key={index} />
                    ))}
                </div>
                <blockquote
                  className={`md:text-md before:content-['"'] after:content-['"']`}
                >
                  {testimonial.review}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <Image
                  src={getCustomerAvatar(testimonial.user_id.avatar_url)}
                  alt={testimonial.id.toString()}
                  width={100}
                  height={100}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="text-md font-semibold text-gray-800">
                    {testimonial.user_id.first_name}{" "}
                    {testimonial.user_id.surname}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

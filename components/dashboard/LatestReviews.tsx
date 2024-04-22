import { Button } from "../ui/button";

export default function LatestReviews() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      review: "Great service, would recommend to anyone!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Doe",
      review: "Very professional and friendly staff, will be returning!",
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Smith",
      review: "Good service, but a bit pricey.",
      rating: 3,
    },
  ];

  return (
    <div className={"min-h-full flex-grow rounded-md bg-white p-10"}>
      <div className={"mb-8 flex w-full flex-row items-center justify-between"}>
        <p className={"text-md text-xl font-bold"}>Latest reviews</p>
        <Button variant={"secondary"}>See all reviews</Button>
      </div>
      {data.map((review) => (
        <div
          key={review.id}
          className={
            "mb-4 flex w-full flex-row items-center justify-between gap-12 rounded-md border-2 border-gray-300 p-2"
          }
        >
          <div className={"flex flex-col"}>
            <p className={"text-md mb-2 font-bold"}>{review.name}</p>
            <p className={"text-md"}>{review.review}</p>
          </div>
          <div className={"flex flex-col"}>
            <p className={"text-md"}>Rating: {review.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

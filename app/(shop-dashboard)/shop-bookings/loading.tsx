import LoadingSpinner from "@/components/utils/LoadingSpinner";

export default function LoadingState() {
  return (
    <div
      className={"flex h-screen w-full flex-col items-center justify-center"}
    >
      <LoadingSpinner />
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => (
  <>
    <div className="flex min-h-screen w-screen flex-row items-center">
      <div className="h-screen w-[25%] border-l-2 border-r-2 border-gray-200">
        <div className="flex h-[90%] flex-col overflow-auto pt-8">
          <div>
            <div className="flex flex-col gap-2">
              <div>
                <div className="flex flex-row gap-2 border-b-2 border-t-2 border-gray-100 p-4">
                  <div className="flex w-full flex-col">
                    <div className="mb-2">
                      <Skeleton className="w-[88px] max-w-full" />
                    </div>
                    <div>
                      <Skeleton className="w-[128px] max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-2 border-b-2 border-t-2 border-gray-100 p-4">
                  <div className="flex w-full flex-col">
                    <div className="mb-2">
                      <Skeleton className="w-[88px] max-w-full" />
                    </div>
                    <div>
                      <Skeleton className="w-[200px] max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-2 border-b-2 border-t-2 border-gray-100 p-4">
                  <div className="flex w-full flex-col">
                    <div className="mb-2">
                      <Skeleton className="w-[104px] max-w-full" />
                    </div>
                    <div>
                      <Skeleton className="w-[112px] max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-2 border-b-2 border-t-2 border-gray-100 p-4">
                  <div className="flex w-full flex-col">
                    <div className="mb-2">
                      <Skeleton className="w-[104px] max-w-full" />
                    </div>
                    <div>
                      <Skeleton className="w-[168px] max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-2 border-b-2 border-t-2 border-gray-100 p-4">
                  <div className="flex w-full flex-col">
                    <div className="mb-2">
                      <Skeleton className="w-[104px] max-w-full" />
                    </div>
                    <div>
                      <Skeleton className="w-[216px] max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex h-10 w-full items-center justify-center px-4 py-2 transition-colors">
          <Skeleton className="w-[128px] max-w-full" />
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-start justify-start">
        <div className="flex h-full max-h-full w-full flex-grow flex-col-reverse items-center overflow-auto p-8">
          <div className="flex w-full flex-col items-center">
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[72px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[96px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[96px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[328px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-start gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[104px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[216px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[88px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[16px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-start gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[104px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[16px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[112px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[96px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[40px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[32px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[40px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-end gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[192px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start justify-start gap-2.5">
                <div className="leading-1.5 flex w-full max-w-[320px] flex-col border-2 border-white p-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>
                      <Skeleton className="w-[104px] max-w-full" />
                    </span>
                    <span>
                      <Skeleton className="w-[136px] max-w-full" />
                    </span>
                  </div>
                  <p className="py-2.5">
                    <Skeleton className="w-[104px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="mb-8 flex w-full flex-row items-end justify-start gap-4">
          <div className="h-16 w-full border-2 p-4">
            <Skeleton className="w-[200px] max-w-full" />
          </div>
          <div className="inline-flex h-10 items-center justify-center gap-4 px-4 py-2 transition-colors">
            <Skeleton className="w-[40px] max-w-full" />
          </div>
        </form>
      </div>
    </div>
  </>
);

const SandboxPreview = () => (
  <div className="flex h-full w-full justify-center p-10">
    <LoadingSkeleton />
  </div>
);

export default SandboxPreview;

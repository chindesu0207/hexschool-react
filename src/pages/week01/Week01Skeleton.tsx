"use client";
import { Skeleton } from "@/components/ui/skeleton";

const Week01Skeleton = () => {
  return (
    <>
      <div>
        <Skeleton className="h-9 w-60 mb-4" />
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => {
            return <Skeleton className="w-full h-64" key={index} />;
          })}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-square mx-auto">
              <Skeleton className="w-full aspect-square" />
            </div>
            <div className="flex w-full mx-auto gap-3">
              {[...Array(3)].map((_, index) => {
                return (
                  <Skeleton className="w-full aspect-square" key={index} />
                );
              })}
            </div>
          </div>
          <div>
            <Skeleton className="h-9 w-60 mb-2" />
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-16 w-80 my-4" />
            <Skeleton className="h-6 w-80" />
            <Skeleton className="h-10 w-60 my-6" />
            <Skeleton className="h-6 w-60 mb-2" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Week01Skeleton;

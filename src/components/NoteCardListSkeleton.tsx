import React from "react";
import NoteCardLayout from "./layout/NoteCardLayout";
import { Skeleton } from "./ui/skeleton";

const NoteCardListSkeleton = () => {
  return (
    <NoteCardLayout>
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
      <Skeleton className="lg:col-span-3 md:col-span-6 col-span-12 p-10 h-52" />
    </NoteCardLayout>
  );
};

export default NoteCardListSkeleton;

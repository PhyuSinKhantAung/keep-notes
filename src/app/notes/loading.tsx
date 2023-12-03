import NoteCardListSkeleton from "@/components/NoteCardListSkeleton";
import NoteCardLayout from "@/components/layout/NoteCardLayout";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div>
      <div className="md:w-[35%] mx-auto">
        <Skeleton className="h-10 w-full" />
      </div>
      <NoteCardListSkeleton />
    </div>
  );
}

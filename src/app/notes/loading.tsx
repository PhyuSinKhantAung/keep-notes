import NoteCardListSkeleton from '@/components/NoteCardListSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function loading() {
  return (
    <div>
      <div className="md:w-[35%] mx-auto">
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="mb-6">
        <Skeleton className="md:mx-10 columns-1 w-52 h-8" />
      </div>
      <NoteCardListSkeleton />
    </div>
  );
}

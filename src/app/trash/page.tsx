import React from 'react';
import NoteCardListSkeleton from '@/components/NoteCardListSkeleton';
import { Suspense } from 'react';
import { TrashedNoteCardList } from '@/components/NoteCardList';

const page = () => {
  return (
    <div>
      <Suspense fallback={<NoteCardListSkeleton />}>
        <TrashedNoteCardList />
      </Suspense>
    </div>
  );
};

export default page;

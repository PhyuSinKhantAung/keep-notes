import React from 'react';
import { ArchivedNoteCardList } from '@/components/NoteCardList';
import NoteCardListSkeleton from '@/components/NoteCardListSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <>
      <Suspense fallback={<NoteCardListSkeleton />}>
        <ArchivedNoteCardList />
      </Suspense>
    </>
  );
};

export default page;

import { ArchivedNoteCardList } from '@/components/NoteCardList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <ArchivedNoteCardList />

      <Link href="/">
        <Button variant="outline">Back</Button>
      </Link>
    </div>
  );
};

export default page;

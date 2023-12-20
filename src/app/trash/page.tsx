import NoteCard from '@/components/NoteCard';
import NoteCardLayout from '@/components/layout/NoteCardLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-center items-center p-5">
        <h1 className="italic">Notes in trash are deleted after 7 days.</h1>
        <Button variant="ghost">Empty Trash</Button>
      </div>
      <Link href="/">
        <Button variant="outline">Back</Button>
      </Link>
      {/* <NoteCardLayout>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </NoteCardLayout> */}
    </div>
  );
};

export default page;

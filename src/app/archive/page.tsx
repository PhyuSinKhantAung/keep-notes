import NoteCard from '@/components/NoteCard';
import { ArchivedNoteCardList } from '@/components/NoteCardList';
import NoteCardLayout from '@/components/layout/NoteCardLayout';
import React from 'react';

const page = () => {
  return (
    <div>
      <ArchivedNoteCardList />
    </div>
  );
};

export default page;

import React from 'react';
import NoteCardLayout from './layout/NoteCardLayout';
import { fetchNotes } from '@/lib/data';
import NoteCard from './NoteCard';

interface Note {
  _id: string;
  title: string;
  description: string;
  pinned: boolean;
  archive: boolean;
}

export const PinnedNoteCardList = async () => {
  const pinnedNotes = await fetchNotes({
    search: '',
    pinned: true,
    archived: false,
  });
  return (
    <NoteCardLayout>
      {pinnedNotes.count === 0 && (
        <small className="italic">There is no pinned note</small>
      )}
      {pinnedNotes.data.map((item: Note) => (
        <NoteCard
          key={item._id}
          title={item.title}
          description={item.description}
          id={item._id}
          pinned={item.pinned}
        />
      ))}
    </NoteCardLayout>
  );
};

export const OthersNoteCardList = async () => {
  const othersNotes = await fetchNotes({
    search: '',
    pinned: false,
    archived: false,
  });
  return (
    <NoteCardLayout>
      {othersNotes.data.map((item: Note) => (
        <NoteCard
          key={item._id}
          title={item.title}
          description={item.description}
          id={item._id}
          pinned={item.pinned}
        />
      ))}
    </NoteCardLayout>
  );
};

export const ArchivedNoteCardList = async () => {
  const archivedNotes = await fetchNotes({
    search: '',
    pinned: false,
    archived: true,
  });

  return (
    <NoteCardLayout>
      {archivedNotes.data.map((item: Note) => (
        <NoteCard
          key={item._id}
          title={item.title}
          description={item.description}
          id={item._id}
          pinned={item.pinned}
        />
      ))}
    </NoteCardLayout>
  );
};

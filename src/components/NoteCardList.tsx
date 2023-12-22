import React from 'react';
import NoteCardLayout from './layout/NoteCardLayout';
import { fetchNotes } from '@/lib/data';
import NoteCard from './NoteCard';
import { Button } from './ui/button';
import { handleDeleteNote } from '@/lib/actions';

interface Note {
  _id: string;
  title: string;
  description: string;
  pinned: boolean;
  archived: boolean;
  trashed: boolean;
}

export const PinnedNoteCardList = async () => {
  const pinnedNotes = await fetchNotes({
    search: '',
    pinned: true,
    archived: undefined,
    trashed: false,
  });
  return (
    <NoteCardLayout>
      {pinnedNotes.count === 0 && (
        <small className="italic">There is no pinned note</small>
      )}
      {pinnedNotes.count !== 0 &&
        pinnedNotes.data.map((item: Note) => (
          <NoteCard
            key={item._id}
            title={item.title}
            description={item.description}
            id={item._id}
            pinned={item.pinned}
            archived={item.archived}
            trashed={item.trashed}
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
    trashed: false,
  });

  return (
    <NoteCardLayout>
      {othersNotes.count !== 0 &&
        othersNotes.data.map((item: Note) => (
          <NoteCard
            key={item._id}
            title={item.title}
            description={item.description}
            id={item._id}
            pinned={item.pinned}
            archived={item.archived}
            trashed={item.trashed}
          />
        ))}
    </NoteCardLayout>
  );
};

export const ArchivedNoteCardList = async () => {
  const archivedNotes = await fetchNotes({
    search: '',
    pinned: undefined,
    archived: true,
    trashed: false,
  });

  return (
    <>
      {archivedNotes.count === 0 && (
        <div className="flex flex-col md:flex-row justify-center items-center p-5">
          <h1 className="italic">There is no archived note.</h1>
        </div>
      )}
      <NoteCardLayout>
        {archivedNotes.count !== 0 &&
          archivedNotes.data.map((item: Note) => (
            <NoteCard
              key={item._id}
              title={item.title}
              description={item.description}
              id={item._id}
              pinned={item.pinned}
              archived={item.archived}
              trashed={item.trashed}
            />
          ))}
      </NoteCardLayout>
    </>
  );
};

export const TrashedNoteCardList = async () => {
  const trashedNotes = await fetchNotes({
    search: '',
    pinned: undefined,
    archived: undefined,
    trashed: true,
  });

  return (
    <>
      {trashedNotes.count === 0 ? (
        <div className="flex flex-col md:flex-row justify-center items-center p-5">
          <h1 className="italic">Trash is empty.</h1>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center p-5">
          <h1 className="italic">Notes in trash are deleted after 7 days.</h1>
          <form action={handleDeleteNote}>
            <Button variant="ghost">Empty Trash</Button>
          </form>
        </div>
      )}
      <NoteCardLayout>
        {trashedNotes.count !== 0 &&
          trashedNotes.data.map((item: Note) => (
            <NoteCard
              key={item._id}
              title={item.title}
              description={item.description}
              id={item._id}
              pinned={item.pinned}
              archived={item.archived}
              trashed={item.trashed}
            />
          ))}
      </NoteCardLayout>
    </>
  );
};

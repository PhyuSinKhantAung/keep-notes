import React from "react";
import NoteCardLayout from "./layout/NoteCardLayout";
import { fetchNotes } from "@/lib/data";
import NoteCard from "./NoteCard";

export const PinnedNoteCardList = async () => {
  const pinnedNotes = await fetchNotes({ search: "", pinned: true });
  return (
    <NoteCardLayout>
      {pinnedNotes.data.map((item) => (
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
  const othersNotes = await fetchNotes({ search: "", pinned: false });
  return (
    <NoteCardLayout>
      {othersNotes.data.map((item) => (
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

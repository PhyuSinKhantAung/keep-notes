import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import { Suspense } from "react";
import NoteCardListSkeleton from "@/components/NoteCardListSkeleton";
import {
  OthersNoteCardList,
  PinnedNoteCardList,
} from "@/components/NoteCardList";

const page = async () => {
  return (
    <div>
      <NoteInputsForm />
      <small className="md:px-10 columns-1">Pinned</small>
      <Suspense fallback={<NoteCardListSkeleton />}>
        <PinnedNoteCardList />
      </Suspense>
      <small className="md:px-10 columns-1">Others</small>{" "}
      <Suspense fallback={<NoteCardListSkeleton />}>
        <OthersNoteCardList />
      </Suspense>
    </div>
  );
};

export default page;

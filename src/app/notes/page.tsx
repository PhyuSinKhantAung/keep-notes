import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import NoteCard from "@/components/NoteCard";
import NoteCardLayout from "@/components/layout/NoteCardLayout";

const page = () => {
  return (
    <div>
      <NoteInputsForm />

      <NoteCardLayout>
        <small className="col-span-12">Pinned</small>
        <NoteCard />
      </NoteCardLayout>

      <NoteCardLayout>
        <small className="col-span-12">Others</small>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </NoteCardLayout>
    </div>
  );
};

export default page;

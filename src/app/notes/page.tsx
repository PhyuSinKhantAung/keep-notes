import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import NoteCard from "@/components/NoteCard";

const page = () => {
  return (
    <div>
      <NoteInputsForm />

      <div className="grid grid-cols-12 gap-y-4 gap-x-4 p-16">
        <small className="col-span-12">Pinned</small>

        <NoteCard />
      </div>

      <div className="grid grid-cols-12  gap-y-4 gap-x-4 p-16">
        <small className="col-span-12">Others</small>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default page;

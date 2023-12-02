import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import NoteCard from "@/components/NoteCard";
import NoteCardLayout from "@/components/layout/NoteCardLayout";
import { fetchNotes } from "@/lib/data";

const page = async () => {
  const data = await fetchNotes();
  console.log(data);
  return (
    <div>
      <NoteInputsForm />

      {/* <NoteCardLayout>
        <small className="col-span-12">Pinned</small>
        <NoteCard />
      </NoteCardLayout> */}

      <NoteCardLayout>
        {/* <small className="col-span-12">Others</small> */}
        {/* <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard /> */}
        {data.data.map((item) => (
          <NoteCard
            key={item._id}
            title={item.title}
            description={item.description}
          />
        ))}
      </NoteCardLayout>
    </div>
  );
};

export default page;

import React from "react";
import NoteInputsForm from "@/components/NoteInputsForm";
import NoteCard from "@/components/NoteCard";
import NoteCardLayout from "@/components/layout/NoteCardLayout";
import { fetchNotes } from "@/lib/data";
import { Suspense } from "react";
import NoteCardListSkeleton from "@/components/NoteCardListSkeleton";

const page = async () => {
  const data = await fetchNotes();

  return (
    <div>
      <NoteInputsForm />
      {/* // TODO **This will be focus soon for pinned notes */}
      {/* <NoteCardLayout>
        <small className="col-span-12">Pinned</small>
        <NoteCard />
      </NoteCardLayout> */}
      <Suspense fallback={<NoteCardListSkeleton />}>
        <NoteCardLayout>
          {data.data.map((item) => (
            <NoteCard
              key={item._id}
              title={item.title}
              description={item.description}
            />
          ))}
        </NoteCardLayout>
      </Suspense>
    </div>
  );
};

export default page;

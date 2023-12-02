import React from "react";

const NoteCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12  gap-y-4 gap-x-4 p-16">{children}</div>
  );
};

export default NoteCardLayout;

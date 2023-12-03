import React from "react";

const NoteCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="columns-1 lg:columns-4 md:columns-2 gap-3 space-y-3 md:p-10 mt-5">
      {children}
    </div>
  );
};

export default NoteCardLayout;

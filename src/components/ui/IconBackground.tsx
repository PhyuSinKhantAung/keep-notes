import React from "react";

const IconBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex p-2 justify-center items-center cursor-pointer hover:bg-accent hover:rounded-full">
      {children}
    </div>
  );
};

export default IconBackground;

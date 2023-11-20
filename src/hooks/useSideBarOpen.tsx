import { useState } from "react";

export const useSideBarOpen = () => {
  const [open, setOpen] = useState(true);

  const openSideBar = () => {
    setOpen(!open);
  };

  const closeSideBar = () => {
    setOpen(!open);
  };

  return { open, openSideBar, closeSideBar };
};

"use client";
import NavBar from "@/components/layout/NavBar";
import SideBar from "@/components/layout/SideBar";
import { useSideBarOpen } from "@/hooks/useSideBarOpen";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, openSideBar } = useSideBarOpen();

  return (
    <div>
      <NavBar openSideBar={openSideBar} />

      <div className="flex">
        <SideBar open={open} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;

'use client';
import NavBar from '@/components/layout/NavBar';
import SideBar from '@/components/layout/SideBar';
import { useSideBarOpen } from '@/hooks/useSideBarOpen';
import React from 'react';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const { open, openSideBar } = useSideBarOpen();

  return (
    <div>
      <NavBar />

      <main className="p-2 max-w-screen-lg mx-auto">{children}</main>
    </div>
  );
};

export default BaseLayout;

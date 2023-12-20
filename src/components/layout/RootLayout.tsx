'use client';
import NavBar from '@/components/layout/NavBar';
import React from 'react';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />

      <main className="p-2 max-w-screen-lg mx-auto">{children}</main>
    </div>
  );
};

export default BaseLayout;

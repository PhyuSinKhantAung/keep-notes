import React from 'react';
import { Label } from '../ui/label';

const BaseLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div>
      <div className="mt-5 md:px-10 flex">
        <Label>{title}</Label>
      </div>
      {children}
    </div>
  );
};

export default BaseLayout;

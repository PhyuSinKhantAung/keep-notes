import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
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
      <div className="mt-5 px-10">
        <Label>{title}</Label>
      </div>
      {children}
      <div className="my-10 px-10">
        <Link href="/" className="flex flex-end h-40">
          <Button variant="outline" className="self-end">
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BaseLayout;

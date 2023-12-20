import '@/styles/globals.css';
import type { Metadata } from 'next';
import BaseLayout from '@/components/layout/BaseLayout';

export const metadata: Metadata = {
  title: 'Archived Notes',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BaseLayout title="Archived Notes">{children}</BaseLayout>
    </>
  );
}

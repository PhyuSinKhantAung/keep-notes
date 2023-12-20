import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Memorize your plans',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

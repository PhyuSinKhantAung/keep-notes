import AuthProvider from '@/components/auth/AuthProvider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Keep notes',
  description: 'Memorize your plans',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/ClientMember');
  }
  return <AuthProvider>{children}</AuthProvider>;
}

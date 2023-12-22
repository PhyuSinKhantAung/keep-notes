import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import BaseLayout from '@/components/layout/RootLayout';
import AuthProvider from '@/components/auth/AuthProvider';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

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

  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans antialiased flex flex-col px-2',
          fontSans.variable
        )}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <BaseLayout>{children}</BaseLayout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

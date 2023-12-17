import AuthProvider from "@/components/auth/AuthProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keep notes",
  description: "Memorize your plans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}

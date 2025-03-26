"use client"; // Ensure this is a Client Component
import "./globals.css";
import Head from 'next/head'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Azela Trading</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

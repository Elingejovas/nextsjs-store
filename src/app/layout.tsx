"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
Header
import "./globals.css";
import { headers } from "next/headers";
import { Header } from "app/componentes/header";

const inter = Inter({ subsets: ["latin"] });

     

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>
        {children}
       </body>
    </html>
  );
}

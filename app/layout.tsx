import type { Metadata } from "next";

import { TemaProvider } from "@/context/tema-context";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "../components/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latihan Next.js",
  description: "Project latihan Next.js Track",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <TemaProvider>{children}</TemaProvider>
      </body>
    </html>
  );
}

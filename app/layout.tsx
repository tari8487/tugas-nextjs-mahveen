import type { Metadata } from "next";
import { TemaProvider } from "@/context/tema-context";
import Menu from "@/components/menu";
import { FavoritProvider } from "@/context/favorit-context";
import TombolTema from "@/components/tombol-tema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahveen Skincare.js",
  description: "Landing Page Mahveen Skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <TemaProvider>
          <FavoritProvider>
            <header className="flex items-center justify-between border-b p-4">
              <Menu />
              <TombolTema />
            </header>
            <main className="p-4">{children}</main>
          </FavoritProvider>
        </TemaProvider>
      </body>
    </html>
  );
}

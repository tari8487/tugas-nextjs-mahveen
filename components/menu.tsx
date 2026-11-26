"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTema } from "@/context/tema-context";
import { useFavorit } from "@/context/favorit-context";

export default function Menu() {
  const pathname = usePathname();
  const { gelap } = useTema();
  const { daftar } = useFavorit();

  const link = (href: string, label: string) => {
    const isActive = href === "/blog" ? pathname.startsWith("/blog") : pathname === href;
    return (
      <Link href={href} className={isActive ? "font-bold underline" : ""}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="flex flex-wrap items-center gap-4">
      {link("/", "Beranda")}
      {link("/tentang", "Tentang")}
      {link("/kontak", "Kontak")}
      {link("/blog", "Blog")}
      <div className="ml-auto flex items-center gap-4 text-sm">
        <span>Tema: {gelap ? "Gelap" : "Terang"}</span>
        <span>Favorit: {daftar.length}</span>
      </div>
    </nav>
  );
}

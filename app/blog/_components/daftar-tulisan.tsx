"use client";

import { useState } from "react";
import Link from "next/link";
import KotakCari from "./kotak-cari";

export default function DaftarTulisan({ daftarSlug }: { daftarSlug: string[] }) {
  const [cari, setCari] = useState("");

  const tulisanCocok = daftarSlug.filter((slug) => slug.toLowerCase().includes(cari.toLowerCase()));

  return (
    <div>
      {/* Cukup masukkan setCari langsung ke saatBerubah */}
      <KotakCari nilai={cari} saatBerubah={setCari} />

      <ul className="mt-4 space-y-2">
        {tulisanCocok.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-purple-700 hover:underline">
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useFavorit } from "@/context/favorit-context";

export default function TombolFavorit({ slug }: { slug: string }) {
  const { daftar, ubahFavorit } = useFavorit();
  const sudahDisimpan = daftar.includes(slug);

  return (
    <button
      type="button"
      onClick={() => ubahFavorit(slug)}
      aria-pressed={sudahDisimpan}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
        sudahDisimpan
          ? "border-[#D4A359] bg-[#6B3FA0] text-amber-100 shadow-sm hover:bg-[#593287]"
          : "border-[#6B3FA0]/30 bg-white text-[#6B3FA0] hover:border-[#6B3FA0] hover:bg-purple-50"
      }`}
    >
      <span className={sudahDisimpan ? "text-[#D4A359]" : "text-[#6B3FA0]"}>
        {sudahDisimpan ? "★" : "☆"}
      </span>
      <span>{sudahDisimpan ? "Tersimpan di favorit" : "Simpan ke favorit"}</span>
    </button>
  );
}

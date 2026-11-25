"use client";

import { useState } from "react";

export default function CommentButton({ slug }: { slug: string }) {
  const [jumlahKomentar, setJumlahKomentar] = useState(() => {
    if (typeof window === "undefined") return 0;
    const simpanan = localStorage.getItem(`komentar-${slug}`);
    return simpanan === null ? 0 : Number(simpanan);
  });

  function tambahKomentar() {
    const jumlahBaru = jumlahKomentar + 1;
    setJumlahKomentar(jumlahBaru);
    if (typeof window !== "undefined") {
      localStorage.setItem(`komentar-${slug}`, String(jumlahBaru));
    }
  }

  return (
    <button onClick={tambahKomentar} className="rounded-lg border px-4 py-2">
      💬 {jumlahKomentar}
    </button>
  );
}

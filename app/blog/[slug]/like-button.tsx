"use client";

import { useState } from "react";

export default function LikeButton({ slug }: { slug: string }) {
  const [jumlahSuka, setJumlahSuka] = useState(() => {
    if (typeof window === "undefined") return 0;
    const simpanan = localStorage.getItem(`suka-${slug}`);
    return simpanan === null ? 0 : Number(simpanan);
  });

  function tambahSuka() {
    const jumlahBaru = jumlahSuka + 1;
    setJumlahSuka(jumlahBaru);
    if (typeof window !== "undefined") {
      localStorage.setItem(`suka-${slug}`, String(jumlahBaru));
    }
  }

  return (
    <button onClick={tambahSuka} className="rounded-lg border px-4 py-2">
      👍 {jumlahSuka}
    </button>
  );
}

"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function LikeButton({ slug }: { slug: string }) {
  const key = `suka-${slug}`;

  const jumlahSuka = useSyncExternalStore(
    subscribe,
    () => {
      const simpanan = localStorage.getItem(key);
      return simpanan === null ? 0 : Number(simpanan);
    },
    () => 0,
  );

  function tambahSuka() {
    const jumlahBaru = jumlahSuka + 1;
    localStorage.setItem(key, String(jumlahBaru));
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <button type="button" onClick={tambahSuka} className="rounded-lg border px-4 py-2">
      👍 {jumlahSuka}
    </button>
  );
}

"use client";

import { useTema } from "@/context/tema-context";

export default function TombolTema() {
  const { gelap, ubahTema } = useTema();

  return (
    <button onClick={ubahTema} className="rounded-lg border px-4 py-2">
      {gelap ? "Ganti ke terang" : "Ganti ke gelap"}
    </button>
  );
}
("use client");

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Tema = {
  gelap: boolean;
  ubahTema: () => void;
};

const TemaContext = createContext<Tema | null>(null);

export function TemaProvider({ children }: { children: ReactNode }) {
  const [gelap, setGelap] = useState(false);
  const ubahTema = () => setGelap((nilaiLama) => !nilaiLama);

  return <TemaContext.Provider value={{ gelap, ubahTema }}>{children}</TemaContext.Provider>;
}

export function useTema() {
  const tema = useContext(TemaContext);
  if (tema === null) {
    throw new Error("useTema harus dipakai di dalam TemaProvider");
  }
  return tema;
}

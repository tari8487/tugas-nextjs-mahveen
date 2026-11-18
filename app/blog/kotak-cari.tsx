export default function KotakCari({
  nilai,
  saatBerubah,
}: {
  nilai: string;
  saatBerubah: (teks: string) => void;
}) {
  return (
    <input
      type="text"
      value={nilai}
      onChange={(e) => saatBerubah(e.target.value)}
      placeholder="Cari tulisan..."
      className="w-full rounded-xl border border-purple-200 bg-white p-3 text-slate-800 placeholder-slate-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
    />
  );
}

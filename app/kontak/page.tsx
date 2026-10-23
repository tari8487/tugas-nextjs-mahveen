export default function KontakPage() {
  return (
    <main className="p-8 font-sans">
      <div className="max-w-3xl mx-auto my-8 p-6 bg-white dark:bg-zinc-900 border-2 border-[#6B3FA0]/30 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hubungi Saya</h1>

        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          Silakan hubungi saya melalui kontak di bawah ini untuk konsultasi skincare dan kemitraan:
        </p>
        <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            <strong>Instagram:</strong> @mahveen.yogyakarta
          </li>
          <li>
            <strong>Lokasi:</strong> Yogyakarta
          </li>
        </ul>
      </div>
    </main>
  );
}

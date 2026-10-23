import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center mt-8 sm:mb-8">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-10 py-32 px-16 bg-white dark:bg-black items-center">
        <Image
          className="w-full max-w-[500px] h-auto rounded-lg mb-8"
          src="/all-produk.png"
          alt="Mahveen Skincare All Produk"
          width={1054}
          height={880}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 max-w-2xl text-center">
            Pancarkan Cantik Alami dengan Mahveen Skincare
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-8 mb-6 leading-relaxed text-justify">
            Diformulasikan khusus dengan bahan alam (natural extract) untuk merawat skin barrier,
            mencerahkan, dan menutrisi kulit wajah agar sehat dan cantik alami tanpa rasa
            ketergantungan.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-[#6B3FA0] px-6 font-semibold text-white transition-all hover:bg-[#542d82] shadow-md"
            href="katalog produk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Katalog
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border-2 border-[#D4A359] bg-transparent px-6 font-semibold text-[#B8860B] transition-all hover:bg-[#D4A359] hover:text-white"
            href="https://wa.me/6287839221518"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi
          </a>
        </div>
      </main>
    </div>
  );
}

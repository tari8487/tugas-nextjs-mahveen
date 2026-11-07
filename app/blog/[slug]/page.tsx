export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-purple-950">{slug}</h1>
      <div className="mt-6 rounded-xl border border-purple-200 bg-white p-6 shadow-sm">
        <p className="mt-4">
          Mahveen hadir dengan rangkaian produk Cosmeceutical Grade Skincare, tingkat perawatan
          wajah yang memiliki khasiat seperti obat, namun dapat digunakan selamanya layaknya
          kosmetik. Mahveen diformulasi oleh para ahli dengan kombinasi bahan-bahan alam yang dapat
          mengembalikan kesehatan dan kecantikan alami kulit wajah. Visi kami adalah Wujudkan
          Muslimah Indonesia Bebas dari Krim Abal-Abal dan Krim Racikan Tidak Terstandar.
        </p>
      </div>
    </main>
  );
}

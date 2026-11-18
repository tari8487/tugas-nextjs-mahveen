import DaftarTulisan from "./daftar-tulisan";

export default function BlogPage() {
  const articles = [
    {
      title: "Konsep Cantik Mahveen",
      description: "Memahami konsep kecantikan Mahveen.",
      href: "/blog/konsep-cantik-mahveen",
      color: "bg-purple-100",
      accent: "bg-purple-700",
    },
    {
      title: "Formulasi Skincare Mahveen",
      description: "Mengenal formulasi produk Mahveen.",
      href: "/blog/formulasi-skincare-mahveen",
      color: "bg-yellow-100",
      accent: "bg-yellow-500",
    },
    {
      title: "Bebas Krim Racikan",
      description: "Solusi lepas dari krim racikan",
      href: "/blog/bebas-krim-racikan",
      color: "bg-violet-100",
      accent: "bg-violet-700",
    },
  ];

  const daftarSlug = articles.map((article) => article.href.replace("/blog/", ""));

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-purple-950">Blog Mahveen</h1>

        <p className="mt-2 text-sm text-purple-700">
          Temukan informasi perawatan kulit terbaik untukmu.
        </p>
      </div>

      <div className="mt-8">
        <DaftarTulisan daftarSlug={daftarSlug} />
      </div>
    </main>
  );
}

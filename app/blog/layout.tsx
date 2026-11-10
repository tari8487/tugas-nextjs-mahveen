import Link from "next/link";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="min-h-screen bg-purple-50/50 pb-12">
      <p className="border-b border-purple-100 bg-purple-100/60 px-6 py-2.5 text-sm text-purple-900">
        Bagian: Blog —{" "}
        <Link href="/blog" className="underline">
          semua tulisan
        </Link>
      </p>
      {children}
    </section>
  );
}

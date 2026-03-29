import React from "react";

const stories = [
  {
    title: "Pertemuan Pertama",
    description:
      "Kami bertemu lewat obrolan sederhana, tapi sejak hari itu rasanya selalu ada alasan untuk saling mencari kabar.",
  },
  {
    title: "Belajar Saling Mengerti",
    description:
      "Di setiap perbedaan, kami belajar untuk mendengarkan lebih lama dan menilai dengan lebih lembut.",
  },
  {
    title: "Bertumbuh Bersama",
    description:
      "Bukan soal selalu sempurna, tapi soal tetap memilih satu sama lain dalam proses bertumbuh.",
  },
];

export default function OurStoryPage() {
  return (
    <section className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Cerita Kami</p>
      <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 md:text-4xl">Bab kecil perjalanan kami.</h1>
      <p className="mt-3 max-w-3xl text-zinc-700">
        Halaman ini berisi rangkaian momen yang membentuk hubungan kami, dari awal bertemu sampai cara kami menjaga komitmen setiap hari.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {stories.map((story) => (
          <article key={story.title} className="rounded-2xl border border-rose-100 bg-rose-50/50 p-4">
            <h2 className="text-lg font-semibold text-zinc-900">{story.title}</h2>
            <p className="mt-2 text-sm text-zinc-700">{story.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const photoCards = [
  { id: 1, title: "First Date", subtitle: "Senyum canggung yang justru paling kami ingat." },
  { id: 2, title: "Road Trip", subtitle: "Playlist favorit + jalan panjang + banyak cerita." },
  { id: 3, title: "Birthday Night", subtitle: "Malam sederhana, tapi penuh rasa syukur." },
  { id: 4, title: "Sunset Walk", subtitle: "Langit senja dan obrolan yang tidak pernah habis." },
  { id: 5, title: "Coffee Morning", subtitle: "Rutinitas kecil yang terasa paling hangat." },
  { id: 6, title: "Random Selfie", subtitle: "Foto buru-buru yang malah jadi favorit." },
];

export default function PhotosPage() {
  return (
    <section className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Foto</p>
      <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 md:text-4xl">Galeri kenangan kami.</h1>
      <p className="mt-3 max-w-3xl text-zinc-700">Nanti kamu bisa ganti placeholder ini dengan foto asli. Struktur galerinya sudah siap dipakai.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photoCards.map((card) => (
          <article key={card.id} className="rounded-2xl border border-rose-100 bg-rose-50/40 p-3">
            <div className="grid h-36 place-items-center rounded-xl bg-white text-xs font-semibold uppercase tracking-wide text-rose-400">Photo Placeholder</div>
            <h2 className="mt-3 text-base font-semibold text-zinc-900">{card.title}</h2>
            <p className="mt-1 text-sm text-zinc-700">{card.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const places = [
  { name: "Kafe Hujan Sore", note: "Tempat favorit untuk ngobrol lama sambil minum cokelat hangat." },
  { name: "Taman Kota", note: "Spot jalan santai yang selalu jadi tempat kami cerita banyak hal." },
  { name: "Pantai Senja", note: "Perjalanan singkat yang jadi salah satu momen paling tenang." },
  { name: "Museum Date", note: "Belajar hal baru bareng sambil foto-foto random." },
];

export default function TravelPage() {
  return (
    <section className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Jalan Jalan</p>
      <h1 className="mt-3 text-3xl font-extrabold text-zinc-900 md:text-4xl">Tempat-tempat yang kami kunjungi.</h1>
      <p className="mt-3 max-w-3xl text-zinc-700">Setiap tempat punya cerita. Bukan hanya lokasinya, tapi perasaan yang kami bawa pulang dari sana.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {places.map((place) => (
          <article key={place.name} className="rounded-2xl border border-rose-100 bg-white p-4">
            <h2 className="text-lg font-semibold text-zinc-900">{place.name}</h2>
            <p className="mt-2 text-sm text-zinc-700">{place.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

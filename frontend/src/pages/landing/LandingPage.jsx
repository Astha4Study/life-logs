import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white p-6 shadow-sm md:p-8">
        <div className="pointer-events-none absolute -right-14 -top-10 h-44 w-44 rounded-full bg-rose-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl" />

        <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
          Our Love Logs
        </p>
        <h1 className="relative mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
          Cerita tentang dua hati yang tumbuh bersama.
        </h1>
        <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
          Website ini kami buat untuk menyimpan kenangan, momen perjalanan, dan
          foto-foto kecil yang membuat hubungan ini terasa lebih hangat dari
          hari ke hari.
        </p>

        <div className="relative mt-6 flex flex-wrap gap-3">
          <Link
            to="/cerita-kami"
            className="rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            Baca Cerita Kami
          </Link>
          <Link
            to="/foto"
            className="rounded-xl border border-rose-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-zinc-900"
          >
            Lihat Foto
          </Link>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <article className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
            Cerita
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">
            Momen Awal
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Awal perkenalan, obrolan pertama, dan alasan kenapa kami saling
            memilih.
          </p>
        </article>

        <article className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
            Jalan Jalan
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">
            Tempat Favorit
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Daftar tempat yang pernah kami datangi, dari yang sederhana sampai
            yang berkesan.
          </p>
        </article>

        <article className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
            Foto
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">
            Galeri Kenangan
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Kumpulan foto kecil yang merekam perjalanan hubungan kami.
          </p>
        </article>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function LoginForm() {
  return (
    <main className="min-h-screen bg-[#10131B] px-5 py-6 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] transition-colors hover:text-white">
            ← Voltar para o feed
          </Link>

          <div className="rounded-full border border-white/5 bg-[#1B1E27] px-3 py-1 text-xs text-[#A1A1AA]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
            +1.4k devs online agora
          </div>
        </header>

        {/* Card principal */}
        <section className="mt-8 rounded-2xl border border-white/[0.03] bg-[#171A23] px-6 py-10 shadow-2xl sm:px-10">
          <div className="text-center">
            <h1 className="text-xl font-bold text-white">Login Juniando</h1>
          </div>
        </section>
      </div>
    </main>
  );
}

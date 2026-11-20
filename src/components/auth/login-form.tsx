'use client';

import Link from 'next/link';

export default function LoginForm() {
  return (
    <main className="min-h-screen bg-[#10131B] px-5 py-6 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A1A1AA] transition-colors hover:text-white">
            ← Voltar para o feed
          </Link>

          <div className="rounded-full border border-white/5 bg-[#1B1E27] px-3 py-1 text-xs text-[#A1A1AA]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
            +1.4k devs online agora
          </div>
        </header>

        <section className="mt-8 rounded-2xl border border-white/[0.03] bg-[#171A23] px-6 py-10 shadow-2xl sm:px-10">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#49365F] bg-[#29213A] px-3 py-1 text-xs font-medium text-[#D4A5FF]">
              <span>✦</span>
              Juniando - comunidade dev
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Boas-vindas ao Juniando
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              O espaço aberto para devs compartilharem dúvidas, códigos e evoluírem juntos sem
              julgamentos.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

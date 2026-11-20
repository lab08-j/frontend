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
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8B5CF6] text-sm font-bold text-white">
                J
              </span>

              <span>Juniando • comunidade dev</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Boas-vindas ao Juniando
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              O espaço aberto para devs compartilharem dúvidas, códigos e evoluírem juntos sem
              julgamentos.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <label htmlFor="identifier" className="text-sm font-medium text-[#E4E4E7]">
                E-mail, usuário ou telefone
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#71717A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3 6.7" />
                  </svg>
                </div>

                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  autoComplete="username"
                  placeholder="seu@email.com ou usuário"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#10131B] pr-4 pl-11 text-sm text-white transition-all outline-none placeholder:text-[#71717A] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

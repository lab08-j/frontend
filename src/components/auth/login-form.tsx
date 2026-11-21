'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { AuthFooter } from '@/app/(auth)/auth-footer';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#10131B] px-5 py-6 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#29213A] text-sm font-bold text-[#C4B5FD]">
              J
            </span>

            <span className="text-sm font-semibold text-white">Juniando</span>
          </Link>

          <Link href="/" className="text-xs text-[#A1A1AA] transition-colors hover:text-white">
            ← Voltar ao feed
          </Link>
        </header>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-wrap items-center justify-between gap-3 sm:mt-12">
          <Link href="/" className="text-xs text-[#A1A1AA] transition-colors hover:text-white">
            ← Voltar para o feed
          </Link>

          <div className="rounded-full border border-white/5 bg-[#1B1E27] px-3 py-1 text-xs text-[#A1A1AA]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400" />
            +1.4k devs online agora
          </div>
        </div>

        <section className="mx-auto mt-3 w-full max-w-lg rounded-2xl border border-white/[0.03] bg-[#171A23] px-5 py-7 shadow-2xl sm:px-8 sm:py-8">
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

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-[#E4E4E7]">
                Senha
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
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#10131B] pr-12 pl-11 text-sm text-white transition-all outline-none placeholder:text-[#71717A] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#71717A] transition-colors hover:text-white"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
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
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
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
                      <path d="m3 3 18 18" />
                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a13.7 13.7 0 0 1-3 3.8" />
                      <path d="M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7c1.2 0 2.3-.2 3.3-.6" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="remember"
                className="flex cursor-pointer items-center gap-2 text-sm text-[#A1A1AA]"
              >
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer rounded border-white/20 bg-[#10131B] accent-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30"
                />
                Lembrar de mim
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#A78BFA] transition-colors hover:text-[#C4B5FD]"
              >
                Esqueceu sua senha?
              </Link>
            </div>

            <Button
              type="button"
              className="mt-3 h-12 w-full gap-2 rounded-xl bg-[#8B5CF6] text-sm font-semibold text-white shadow-lg shadow-[#8B5CF6]/20 transition-all hover:bg-[#7C3AED] active:scale-[0.98]"
            >
              Entrar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-[#171A23] px-3 text-xs text-[#71717A]">Ou continue com</span>
              </div>
            </div>

            <button
              type="button"
              className="flex min-h-[64px] w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#20232D] px-4 py-3 text-left transition-all hover:border-white/20 hover:bg-[#292D38] active:scale-[0.98]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="shrink-0 text-white"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Continuar com GitHub</p>

                  <p className="text-xs text-[#A1A1AA]">Sincronize repositórios e perfil</p>
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#49365F] bg-[#29213A] px-2 py-1 text-[10px] font-medium text-[#C4B5FD]">
                <span>★</span>
                Recomendado para devs
              </span>
            </button>

            <button
              type="button"
              className="flex min-h-[64px] w-full items-center justify-between gap-3 rounded-xl border border-white/5 bg-[#1B1E27] px-4 py-3 text-left transition-all hover:border-white/10 hover:bg-[#222631] active:scale-[0.98]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.71 7.18l7.19 5.59c4.2-3.88 7.56-9.63 7.56-17.24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59A14.5 14.5 0 0 1 9.75 24c0-1.59.27-3.12.76-4.59l-7.98-6.19A23.93 23.93 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.91-5.79l-7.19-5.59c-1.99 1.33-4.53 2.12-8.72 2.12-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                  />
                </svg>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Continuar com Google</p>

                  <p className="text-xs text-[#A1A1AA]">Acesso rápido com conta pessoal</p>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-[#A1A1AA]"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#A1A1AA]">
                Primeira vez por aqui?{' '}
                <Link
                  href="/register"
                  className="font-semibold text-[#A78BFA] transition-colors hover:text-[#C4B5FD]"
                >
                  Crie sua conta em 30 segundos
                </Link>
              </p>
            </div>
          </form>
        </section>

        <AuthFooter />
      </div>
    </main>
  );
}

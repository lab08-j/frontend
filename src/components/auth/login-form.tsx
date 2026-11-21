'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { AuthFooter } from '@/app/(auth)/auth-footer';
import { AuthDivider } from '@/app/(auth)/auth-divider';
import { SocialLogin } from '@/app/(auth)/social-login';

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

            <AuthDivider />

            <SocialLogin />

            <div className="mt-6 text-center">
              <p className="text-sm text-[#A1A1AA]">
                Primeira vez por aqui ?{' '}
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

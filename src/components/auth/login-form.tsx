'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { AuthFooter } from '@/app/(auth)/auth-footer';
import { AuthDivider } from '@/app/(auth)/auth-divider';
import { SocialLogin } from '@/app/(auth)/social-login';
import { FormField } from '@/app/(auth)/form-field';
import { PasswordField } from '@/app/(auth)/password-field';
import { AuthIntro } from '@/app/(auth)/auth-intro';

export default function LoginForm() {
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
          <AuthIntro />

          <form className="mt-8 space-y-5">
            <FormField
              id="identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              placeholder="seu@email.com ou usuário"
              label="E-mail, usuário ou telefone"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#10131B] pr-4 pl-11 text-sm text-white transition-all outline-none placeholder:text-[#71717A] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
              icon={
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
              }
            />

            <PasswordField />

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

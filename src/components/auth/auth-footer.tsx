import Link from 'next/link';

export function AuthFooter() {
  return (
    <footer className="max-w-lm mx-auto mt-10 w-full pb-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#71717A]">
        <span>✦ Livre de julgamentos</span>
        <span>✦ Código aberto e trocas reais</span>
        <span>✦ 100% gratuito para sempre</span>
      </div>

      <div className="my-6 h-px w-full bg-white/[0.06]" />

      <nav
        aria-label="Links institucionais"
        className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#71717A]"
      >
        <Link href="/guidelines">Diretrizes</Link>
        <Link href="/terms">Termos de uso</Link>
        <Link href="/privacy">Privacidade</Link>
      </nav>

      <div className="mt-8 flex items-center justify-between text-xs text-[#52525Z]">
        <span>Juniando - Um espaço acolhedor para quem está começando na tecnologia.</span>

        <nav className="flex items-center gap-4">
          <Link href="/guidelines">Diretrizes</Link>
          <Link href="/terms">Termos de uso</Link>
          <Link href="/privacy">Privacidade</Link>
        </nav>
      </div>
    </footer>
  );
}

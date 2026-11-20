import Link from 'next/link';

import cn from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Juniando, página inicial"
      className={cn('flex shrink-0 items-center gap-2 rounded-xl font-heading', className)}
    >
      <span
        aria-hidden
        className="flex size-9 items-center justify-center rounded-xl bg-primary-container text-[22px] leading-[30px] font-bold tracking-[-0.01em] text-primary-foreground"
      >
        J
      </span>
      <span aria-hidden className="flex flex-col">
        <span className="text-lg leading-[26px] font-bold tracking-[-0.025em] text-foreground">
          Juniando
        </span>
        <span className="-mt-1 text-xs leading-4 font-medium tracking-[0.02em] text-tertiary">
          comunidade dev
        </span>
      </span>
    </Link>
  );
}

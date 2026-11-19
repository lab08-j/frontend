import type { ReactNode } from 'react';

import { Container } from './container';

type SiteFooterProps = {
  /** Footer links, rendered on the right on wide screens. */
  children?: ReactNode;
};

export function SiteFooter({ children }: SiteFooterProps) {
  return (
    <footer className="bg-surface-lowest py-12">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="flex flex-wrap items-baseline gap-x-2 text-sm leading-[22px] text-muted-foreground">
          <span className="font-heading text-lg leading-[26px] font-bold text-foreground">
            Juniando
          </span>
          — O lar acolhedor para devs em evolução.
        </p>
        {children}
      </Container>
    </footer>
  );
}

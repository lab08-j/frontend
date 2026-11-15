import type { ReactNode } from 'react';

import { Container } from './container';
import { Logo } from './logo';

type SiteHeaderProps = {
  /** Navbar content (search, actions, user menu) rendered after the logo. */
  children?: ReactNode;
};

export function SiteHeader({ children }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/90 shadow-[0_1px_8px_0_rgb(0_0_0/0.25)] backdrop-blur-xl">
      <Container className="flex h-16 items-center gap-4 lg:gap-8">
        <Logo />
        {children}
      </Container>
    </header>
  );
}

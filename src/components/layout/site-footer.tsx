import Link from 'next/link';

import { Container } from './container';

// Pages still to be built; Discord waits for the server invite URL.
const FOOTER_LINKS = [
  { label: 'Diretrizes de Convivência', href: '/diretrizes' },
  { label: 'Artigos', href: '/artigos' },
  { label: 'Discord', href: '#' },
  { label: 'Mentoria Voluntária', href: '/mentoria' },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-surface-lowest py-12">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="flex flex-wrap items-baseline gap-x-2 text-sm leading-[22px] text-muted-foreground">
          <span className="font-heading text-lg leading-[26px] font-bold text-foreground">
            Juniando
          </span>
          — O lar acolhedor para devs em evolução.
        </p>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm leading-[22px] text-subtle-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

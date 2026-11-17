import { Container } from '@/components/layout/container';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';

/**
 * Shared shell (header, main, footer) for the community pages: feed, discussion,
 * profile and new post. The route group only shares this layout; it does not
 * protect any route. Auth pages (login, sign-up) get their own layout in another group.
 */
export default function CommunityLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-primary-container px-4 py-2 font-heading text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="flex-1 py-7 outline-none">
        <Container>{children}</Container>
      </main>
      <SiteFooter />
    </>
  );
}

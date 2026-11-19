import { Container } from './container';
import type { CurrentUser } from './demo-user';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { NotificationsButton } from './notifications-button';
import { SiteSearch } from './site-search';
import { UserMenu } from './user-menu';
import { WriteButton } from './write-button';

type SiteHeaderProps = {
  user: CurrentUser;
};

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/90 shadow-[0_1px_8px_0_rgb(0_0_0/0.25)] backdrop-blur-xl">
      <Container className="flex h-16 items-center gap-2 sm:gap-4">
        <MobileNav />
        <Logo />
        <div className="hidden flex-1 justify-center px-4 md:flex">
          <SiteSearch className="w-full max-w-xl" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <WriteButton />
          <NotificationsButton />
          <UserMenu user={user} />
        </div>
      </Container>
    </header>
  );
}

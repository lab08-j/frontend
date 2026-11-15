'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { CommunityNav } from './community-nav';
import { SiteSearch } from './site-search';

/**
 * Side panel for screens below `lg`, where the left column with the
 * section navigation is hidden. Also holds the search below `md`.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menu"
        render={<Button variant="ghost" size="icon-lg" className="-ml-2 rounded-full lg:hidden" />}
      >
        <Menu aria-hidden />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 gap-2 bg-background">
        <SheetHeader className="px-4 pt-5">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-2">
          <SiteSearch onSubmit={close} className="px-2" />
          <CommunityNav onNavigate={close} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

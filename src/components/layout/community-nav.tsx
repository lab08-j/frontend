'use client';

import { Code, GalleryVerticalEnd, Lightbulb, type LucideIcon, MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cn from '@/lib/utils';

type CommunitySection = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// Section routes are provisional until those pages exist.
export const COMMUNITY_SECTIONS: CommunitySection[] = [
  { label: 'Feed Principal', href: '/', icon: GalleryVerticalEnd },
  { label: 'Discussões Técnicas', href: '/discussoes', icon: MessagesSquare },
  { label: 'Carreira & Dicas', href: '/carreira', icon: Lightbulb },
  { label: 'Code Review', href: '/code-review', icon: Code },
];

type CommunityNavProps = {
  /** Called after a link is clicked (e.g. to close the mobile menu). */
  onNavigate?: () => void;
  className?: string;
};

export function CommunityNav({ onNavigate, className }: CommunityNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Seções da comunidade" className={className}>
      <ul className="flex flex-col gap-1">
        {COMMUNITY_SECTIONS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-4 py-2.5 font-heading transition-colors hover:bg-surface-high focus-visible:outline-2 focus-visible:outline-offset-2',
                  isActive
                    ? 'bg-surface-high text-base leading-6 font-medium text-primary'
                    : 'text-sm leading-5 font-semibold tracking-[0.01em] text-subtle-foreground hover:text-foreground',
                )}
              >
                <Icon aria-hidden className="size-4" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

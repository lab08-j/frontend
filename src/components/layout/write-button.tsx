'use client';

import { GalleryVerticalEnd, SquarePen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NEW_POST_PATH = '/nova-publicacao';

/** Main call to action: "Escrever", or "Explorar Feed" while writing a post. */
export function WriteButton() {
  const isWriting = usePathname() === NEW_POST_PATH;
  const { href, label, Icon } = isWriting
    ? { href: '/', label: 'Explorar Feed', Icon: GalleryVerticalEnd }
    : { href: NEW_POST_PATH, label: 'Escrever', Icon: SquarePen };

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: 'brand', size: 'pill' }), 'max-sm:w-9 max-sm:px-0')}
    >
      <Icon aria-hidden />
      {/* Icon only on small screens; the label stays readable by screen readers */}
      <span className="sr-only sm:not-sr-only">{label}</span>
    </Link>
  );
}

import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/**
 * Centers content at the app max width (1280px) with the side gutter.
 * 16px gutter on small screens (360px phones), 32px from `sm` up, as in the Figma.
 */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-8', className)} {...props} />;
}

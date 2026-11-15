import { Bell } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function NotificationsButton() {
  return (
    <Link
      href="/notificacoes"
      aria-label="Notificações"
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'rounded-full')}
    >
      <Bell aria-hidden />
    </Link>
  );
}

'use client';

import { ChevronDown, LogOut, User } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { CurrentUser } from './demo-user';

type UserMenuProps = {
  user: CurrentUser;
};

export function UserMenu({ user }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Menu do usuário"
        className="flex items-center gap-1 rounded-full p-1 transition-colors outline-none hover:bg-surface-high focus-visible:ring-3 focus-visible:ring-ring/50 data-popup-open:bg-surface-high"
      >
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User aria-hidden className="size-3.5" />
          </AvatarFallback>
        </Avatar>
        <ChevronDown aria-hidden className="size-4 text-muted-foreground max-sm:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="truncate text-sm text-foreground">
            {user.name}
          </DropdownMenuLabel>
          <DropdownMenuLinkItem render={<Link href={`/perfil/${user.username}`} />}>
            <User aria-hidden />
            Meu perfil
          </DropdownMenuLinkItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* Enabled once the auth API is integrated */}
        <DropdownMenuItem disabled>
          <LogOut aria-hidden />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

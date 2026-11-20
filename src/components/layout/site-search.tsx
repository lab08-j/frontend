import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import cn from '@/lib/utils';

type SiteSearchProps = {
  className?: string;
  /** Called on submit (e.g. to close the mobile menu). */
  onSubmit?: () => void;
};

// Plain GET form: /busca?q=... (the search page is its own task).
export function SiteSearch({ className, onSubmit }: SiteSearchProps) {
  return (
    <form role="search" action="/busca" onSubmit={onSubmit} className={cn('relative', className)}>
      <Search
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="search"
        name="q"
        aria-label="Pesquisar"
        placeholder="Pesquisar discussões, artigos e dúvidas..."
        className="h-10 rounded-full border-transparent bg-card pr-4 pl-11 text-sm dark:bg-card"
      />
    </form>
  );
}

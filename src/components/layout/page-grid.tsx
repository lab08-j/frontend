import type { ReactNode } from 'react';

type PageGridProps = {
  children: ReactNode;
  /** Left column: section navigation, featured tags. */
  start: ReactNode;
  /** Right column: highlights, mentors, community links. */
  end: ReactNode;
};

/**
 * Three-column page body shared by the Feed and Discussion pages
 * (286px / 596px / 286px with 24px gaps at 1280px in the Figma).
 *
 * - below `lg`: single column; `end` goes under the content and `start` is hidden
 *   (its navigation moves into the navbar menu).
 * - `lg`: `start` + content, with `end` under the content.
 * - `xl`: all three columns side by side.
 */
export function PageGrid({ children, start, end }: PageGridProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[17.875rem_minmax(0,1fr)_17.875rem]">
      <aside aria-label="Navegação da comunidade" className="hidden lg:row-span-2 lg:block">
        {start}
      </aside>
      <div className="min-w-0">{children}</div>
      <aside aria-label="Destaques" className="lg:col-start-2 xl:col-start-auto">
        {end}
      </aside>
    </div>
  );
}

import { PageGrid } from '@/components/layout/page-grid';

// Placeholder until the feed is built: the three regions show the layout grid.
export default function Home() {
  return (
    <PageGrid
      start={<div className="h-64 rounded-xl border border-dashed" />}
      end={<div className="h-64 rounded-xl border border-dashed" />}
    >
      <section className="rounded-xl bg-card p-6">
        <h1 className="text-2xl font-bold">Feed principal</h1>
        <p className="mt-2 text-muted-foreground">As discussões da comunidade aparecem aqui.</p>
      </section>
    </PageGrid>
  );
}

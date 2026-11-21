import { CommunityNav } from '@/components/layout/community-nav';
import { PageGrid } from '@/components/layout/page-grid';
import { PostCard } from '@/components/ui/post-card';

// Placeholder until the feed is built: the three regions show the layout grid.
export default function Home() {
  return (
    <PageGrid
      start={<CommunityNav />}
      end={
        <div className="flex flex-col gap-4">
          <div className="h-64 rounded-xl border border-dashed" />
          <div className="h-64 rounded-xl border border-dashed" />
        </div>
      }
    >
      <section className="rounded-xl bg-card p-6">
        <PostCard
          author="Lucas Menezes"
          badge="destaque"
          publishedAt="ontem"
          readingTime="4 min de leitura"
          title="Como superei o medo de contribuir com código aberto e consegui meu primeiro trampo júnior"
          excerpt="Eu achava que open source era coisa de programador sênior com 10 anos de experiência. Foi quando mandei uma correção simples de…"
          tags={['carreira', 'opensource', 'iniciantes']}
          likes={48}
          comments={24}
        />
      </section>
    </PageGrid>
  );
}

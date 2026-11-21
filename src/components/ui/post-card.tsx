import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

type PostCardProps = {
  author: string;
  avatarUrl?: string;
  badge?: string;
  publishedAt: string;
  readingTime: string;
  coverImage?: string;
  title: string;
  excerpt: string;
  tags: string[];
  likes: number;
  comments: number;
  onLike?: () => void;
  onComments?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  onMoreOptions?: () => void;
};

export function PostCard({
  author,
  avatarUrl,
  badge,
  publishedAt,
  readingTime,
  coverImage,
  title,
  excerpt,
  tags,
  likes,
  comments,
  onLike,
  onComments,
  onSave,
  onShare,
  onMoreOptions,
}: PostCardProps) {
  return (
    <Card className="flex w-full max-w-[596px] flex-col gap-4 p-4 sm:p-7">
      {/* Cabeçalho do card */}
      <header className="flex min-w-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={'Foto de ${author}'}
              className="size-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold"
              aria-hidden="true"
            >
              {author.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-heading text-sm font-semibold text-[#DEE2EE]">{author}</span>

              {badge && (
                <span className="tex-[#FFB95F] rounded-full bg-[#FFB95F]/10 px-2 py-0.5 font-heading text-xs font-medium">
                  {badge}
                </span>
              )}
            </div>

            <p className="font-he4ading text-xs font-medium text-[#908FA0]">
              {publishedAt} • {readingTime}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onMoreOptions}
          disabled={!onMoreOptions}
          arial-label="Mais opções da publicação"
          className="felx size-8 shrink-0 items-center justify-center rounded-full text-[#908FA0] hover:bg-muted disabled:cursor-default"
        >
          <MoreHorizontal size={20} />
        </button>
      </header>

      {/*Imagem de capa da publicação */}

      <div
        className="relative aspect-[540/256] w-full overflow-hidden rounded-lg bg-muted"
        style={
          coverImage
            ? {
                backgroundImage: `linear-gradient( 0deg, rgba(9, 14, 22, 0.8) 0%,
                rgba(9, 14, 22, 0) 50%, rgba(9, 14, 22, 0) 100%), url("${coverImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      />

      {/* Título e descrição */}
      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-3 font-heading text-xl leading-[1.25] font-bold tracking-[-0.75px] text-[#DEE2EE] sm:text-[30px] sm:leading-[37.5px]">
          {title}
        </h2>
        <p className="line-clamp-2 text-base leading-[26px] text-[#C7C4D7]">{excerpt}</p>
      </div>

      {/* Tags da publicação */}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-lg bg-[#252A33] px-2.5 py-1 font-heading text-xs leading-4 font-medium text-[#DEE2EE]"
          >
            <span className="font-bold text-[#FFB95F]">#</span>
            {tag}
          </span>
        ))}
      </div>

      {/* Barra de interação */}
      <footer className="flex min-h-12 items-center justify-between gap-2 border-t border-border/50 pt-2">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={onLike}
            disabled={!onLike}
            aria-label={`${likes} curtidas`}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[#C7C4D7] hover:bg-muted disabled:cursor-default"
          >
            <Heart size={15} className="text-[#FFB95F]" />
            <span className="font-heading text-sm font-semibold">{likes}</span>
          </button>
          <button
            type="button"
            onClick={onComments}
            disabled={!onComments}
            className="inline-flex h-8 min-w-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[#C7C4D7] hover:bg-muted disabled:cursor-default"
          >
            <MessageCircle size={15} className="shrink-0" />
            <span className="truncate font-heading text-sm font-semibold">
              {comments} Comentários
            </span>
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onSave}
            disabled={!onSave}
            aria-label="Salvar publicação"
            className="flex size-9 items-center justify-center rounded-full text-[#908FA0] hover:bg-muted disabled:cursor-default"
          >
            <Bookmark size={18} />
          </button>
          <button
            type="button"
            onClick={onShare}
            disabled={!onShare}
            aria-label="Compartilhar publicação"
            className="flex size-9 items-center justify-center rounded-full text-[#908FA0] hover:bg-muted disabled:cursor-default"
          >
            <Share2 size={18} />
          </button>
        </div>
      </footer>
    </Card>
  );
}

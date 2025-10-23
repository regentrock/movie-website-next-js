import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./MovieDetails.module.css";
import { getMovieDetails } from "@/lib/api/services";
import { Filme } from "@/types/types";
import {
  StarIcon,
  CalendarIcon,
  ClockIcon,
  BookIcon,
  IDIcon,
  ChartIcon,
  LanguageIcon,
  MoneyIcon,
} from "../../components/Icons/Icons";

// ✅ Corrigido: params agora é Promise<{ id: string }>
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const filme = await getMovieDetails(Number(id));

  return {
    title: `${filme?.title || "Detalhes do Filme"} | CineVerso`,
    description: filme?.overview || "Saiba mais sobre este filme no CineVerso.",
    openGraph: {
      title: `${filme?.title || "Detalhes do Filme"} | CineVerso`,
      description: filme?.overview || "Saiba mais sobre este filme no CineVerso.",
      images: [`https://image.tmdb.org/t/p/w500${filme?.poster_path || ""}`],
    },
  };
}

// ✅ Corrigido: props com Promise + use()
type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetalheFilme({ params }: Props) {
  const { id } = use(params); // resolve a Promise conforme o App Router do Next 15
  const filme: Filme | null = (await getMovieDetails(Number(id))) || null;
  if (!filme) return notFound();

  const formatarData = (data?: string) =>
    data ? new Date(data).toLocaleDateString("pt-BR") : "Data não disponível";

  const formatarDuracao = (runtime?: number) =>
    runtime ? `${runtime} minutos` : "Duração não disponível";

  const genres = filme.genres || [];

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.voltar}>
        ← Voltar para Home
      </Link>

      <section className={styles.detalhes}>
        <div className={styles.posterContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            alt={`Poster do filme ${filme.title}`}
            width={300}
            height={450}
            className={styles.poster}
            priority
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <h1 className={styles.titulo}>{filme.title}</h1>

            {filme.tagline && <p className={styles.tagline}>&quot;{filme.tagline}&quot;</p>}

            <div className={styles.metaInfo}>
              <div className={`${styles.metaItem} ${styles.rating}`}>
                <StarIcon className={`${styles.icon} ${styles.iconStar}`} />
                <strong>{filme.vote_average?.toFixed(1)}</strong>
                <span className={styles.voteCount}> | {filme.vote_count} votos</span>
              </div>

              <div className={styles.metaItem}>
                <CalendarIcon className={`${styles.icon} ${styles.iconCalendar}`} />
                <strong>{formatarData(filme.release_date)}</strong>
              </div>

              {filme.runtime && (
                <div className={styles.metaItem}>
                  <ClockIcon className={`${styles.icon} ${styles.iconClock}`} />
                  <strong>{formatarDuracao(filme.runtime)}</strong>
                </div>
              )}
            </div>

            {genres.length > 0 && (
              <div className={styles.genres}>
                {genres.map((genre) => (
                  <span key={genre.id} className={styles.genre}>
                    {genre.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.sinopseSection}>
            <h3 className={styles.sectionTitle}>
              <BookIcon className={styles.icon} />
              Sinopse
            </h3>
            <p className={styles.descricao}>{filme.overview || "Descrição não disponível."}</p>
          </div>

          <div className={styles.detalhesGrid}>
            <div className={styles.detalheItem}>
              <div className={styles.detalheLabel}>
                <IDIcon className={styles.icon} /> ID do Filme
              </div>
              <div className={styles.detalheValor}>{filme.id}</div>
            </div>

            {filme.status && (
              <div className={styles.detalheItem}>
                <div className={styles.detalheLabel}>
                  <ChartIcon className={styles.icon} /> Status
                </div>
                <div className={styles.detalheValor}>{filme.status}</div>
              </div>
            )}

            {filme.original_language && (
              <div className={styles.detalheItem}>
                <div className={styles.detalheLabel}>
                  <LanguageIcon className={styles.icon} /> Idioma Original
                </div>
                <div className={styles.detalheValor}>
                  {filme.original_language.toUpperCase()}
                </div>
              </div>
            )}

            {filme.budget > 0 && (
              <div className={styles.detalheItem}>
                <div className={styles.detalheLabel}>
                  <MoneyIcon className={styles.icon} /> Orçamento
                </div>
                <div className={styles.detalheValor}>
                  {filme.budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            )}

            {filme.revenue > 0 && (
              <div className={styles.detalheItem}>
                <div className={styles.detalheLabel}>
                  <MoneyIcon className={styles.icon} /> Receita
                </div>
                <div className={styles.detalheValor}>
                  {filme.revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            )}
          </div>

          {filme.production_companies && filme.production_companies.length > 0 && (
            <div className={styles.production}>
              <h3 className={styles.sectionTitle}>Produção</h3>
              <div className={styles.productionList}>
                {filme.production_companies.slice(0, 4).map((company) => (
                  <span key={company.id} className={styles.productionCompany}>
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

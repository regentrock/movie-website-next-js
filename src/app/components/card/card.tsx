import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import { Filme } from "@/types/types";

interface CardProps {
  filme: Filme;
}

export default function Card({ filme }: CardProps) {
  // Função para limitar o overview a 120 caracteres
  const truncateOverview = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Calcular a porcentagem para a barra de rating
  const ratingPercentage = (filme.vote_average / 10) * 100;

  return (
    <Link href={`/filmes/${filme.id}`} className={styles.card}>
      <div className={styles.posterContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt={filme.title}
          width={200}
          height={300}
          className={styles.poster}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
        />
        <div className={styles.overlay} />
      </div>

      <h3 className={styles.title}>{filme.title}</h3>

      {filme.overview && (
        <p className={styles.overview}>
          {truncateOverview(filme.overview)}
        </p>
      )}

      <div className={styles.ratingContainer}>
        <div className={styles.ratingBar}>
          <div
            className={styles.ratingFill}
            style={{ width: `${ratingPercentage}%` }}
          />
        </div>
        <div className={styles.rating}>
          <span className={styles.ratingStar}>★</span>
          {filme.vote_average.toFixed(1)}
        </div>
      </div>
    </Link>
  );
}

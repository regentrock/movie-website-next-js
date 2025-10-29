import Link from "next/link";
import styles from "./card.module.css";
import { articles } from "@/lib/articles";

export default function Card() {
  // Função para verificar se o artigo é recente (últimos 7 dias)
  const isRecent = (dateString: string) => {
    const articleDate = new Date(dateString);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return articleDate > sevenDaysAgo;
  };

  return (
    <div className={styles.cardContainer}>
      {articles.map((article) => (
        <div 
          key={article.id} 
          className={`${styles.card} ${isRecent(article.date) ? styles.recent : ''}`}
        >
          <div className={styles.cardHeader}>
            <h2>{article.title}</h2>
            <span className={styles.cardDate}>
              {new Date(article.date).toLocaleDateString('pt-BR')}
            </span>
          </div>
          
          <p>{article.description}</p>
          
          <div className={styles.cardFooter}>
            <Link href={`/articles/${article.id}`} className={styles.readMore}>
              Leia mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
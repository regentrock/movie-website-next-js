import { getTrendingMovies } from "@/lib/api/services";
import Card from "./components/card/card";
import styles from "./page.module.css";

export const metadata = {
  title: "CineVerso | Filmes em Alta",
  description: "Descubra os filmes que estão bombando no momento — direto do CineVerso.",
};


export default async function Home() {
  const filmes = await getTrendingMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Filmes em Alta</h1>

      <div className={styles.grid}>
        {filmes.map((filme) => (
          <Card key={filme.id} filme={filme} />
        ))}
      </div>
    </main>
  );
}
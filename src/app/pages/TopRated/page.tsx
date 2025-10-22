import styles from "../../page.module.css";
import { getTopRatedMovies } from "@/lib/api/services";
import Card from "../../components/card/card";

export const metadata = {
  title: "CineVerso | Mais Bem Avaliados",
  description: "Os filmes mais elogiados pela crítica e pelo público.",
};


export default async function TopRated() {
  const filmes = await getTopRatedMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Filmes Mais Bem Avaliados</h1>

      <div className={styles.grid}>
        {filmes.map((filme) => (
          <Card key={filme.id} filme={filme} />
        ))}
      </div>
    </main>
  );
}
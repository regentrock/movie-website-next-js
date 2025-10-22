import styles from "../../page.module.css";
import { getNowPlayingMovies } from "@/lib/api/services";
import Card from "../../components/card/card";

export const metadata = {
  title: "CineVerso | Em Cartaz",
  description: "Veja os filmes que estão passando agora nos cinemas.",
};


export default async function NowPlaying() {
  const filmes = await getNowPlayingMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Filmes em Cartaz</h1>

      <div className={styles.grid}>
        {filmes.map((filme) => (
          <Card key={filme.id} filme={filme} />
        ))}
      </div>
    </main>
  );
}
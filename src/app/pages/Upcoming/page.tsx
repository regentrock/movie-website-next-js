import styles from "../../page.module.css";
import { getUpcomingMovies } from "@/lib/api/services";
import Card from "../../components/card/card";

export const metadata = {
  title: "CineVerso | Próximas Estreias",
  description: "Confira os lançamentos que chegarão em breve aos cinemas.",
};


export default async function Upcoming() {
  const filmes = await getUpcomingMovies();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Próximos Lançamentos</h1>

      <div className={styles.grid}>
        {filmes.map((filme) => (
          <Card key={filme.id} filme={filme} />
        ))}
      </div>
    </main>
  );
}
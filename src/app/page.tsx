import Card from "./components/card/card";
import styles from "./page.module.css";

export const metadata = {
  title: "CineVerso | Filmes em Alta",
  description: "Descubra os filmes que estão bombando no momento — direto do CineVerso.",
};


export default async function Home() {

  return (
    <>
      <main className={styles.main}>
        <Card/>
      </main>
    </>
  );
}
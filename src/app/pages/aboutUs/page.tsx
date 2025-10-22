import styles from "./aboutUs.module.css";
import Link from "next/link";

export const metadata = {
  title: "CineVerso | Sobre Nós",
  description: "Saiba mais sobre o CineVerso e nossa paixão pelo cinema.",
};

export default function AboutUs() {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Sobre o CineVerso</h1>
        <p className={styles.subtitle}>
          Sua conexão definitiva com o universo do cinema.
        </p>
      </section>

      <section className={styles.content}>
        <p>
          O <strong>CineVerso</strong> nasceu da paixão por filmes e da vontade
          de criar um espaço onde todos pudessem explorar o mundo cinematográfico
          de forma simples, bonita e inspiradora.
        </p>

        <p>
          Aqui, você encontra listas atualizadas com os filmes em alta, os mais
          bem avaliados, os próximos lançamentos e tudo o que está em cartaz —
          com informações precisas fornecidas pela{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            The Movie Database (TMDB)
          </a>
          .
        </p>

        <p>
          Nosso objetivo é oferecer uma experiência visual agradável, com um
          design elegante e moderno, tornando a descoberta de novos filmes uma
          jornada prazerosa. Desenvolvido com{" "}
          <strong>Next.js</strong> e <strong>TypeScript</strong>, o CineVerso foi
          criado para unir tecnologia e cinema com performance e estilo.
        </p>

        <p>
          Acreditamos que cada filme conta uma história — e o CineVerso é o seu
          portal para encontrá-las todas.
        </p>
      </section>

      <section className={styles.footer}>
        <Link href="/" className={styles.backButton}>
          ← Voltar para a Página Inicial
        </Link>
      </section>
    </main>
  );
}

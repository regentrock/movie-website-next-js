import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.logo}>NewsPress</h2>
          <p className={styles.text}>
            Sua fonte confiável de notícias e artigos jornalísticos. 
            Trazendo as últimas novidades e análises aprofundadas sobre os 
            temas mais relevantes da atualidade.
          </p>
        </div>

        <div className={styles.links}>
          <h3 className={styles.title}>Navegação</h3>
          <Link href="/" className={styles.link}>
            Início
          </Link>
          <Link href="/articles" className={styles.link}>
            Artigos
          </Link>
          <Link href="/about" className={styles.link}>
            Sobre
          </Link>
          <Link href="/contact" className={styles.link}>
            Contato
          </Link>
        </div>

        <div className={styles.social}>
          <h3 className={styles.title}>Conecte-se</h3>
          <a href="#" className={styles.socialLink}>
            <span>Twitter</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span>Facebook</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.credits}>
          <p>© {new Date().getFullYear()} NewsPress. Todos os direitos reservados.</p>
          <span>•</span>
          <p>Jornalismo de qualidade para todos</p>
        </div>
      </div>
    </footer>
  );
}
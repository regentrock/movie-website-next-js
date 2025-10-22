import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção principal */}
        <div className={styles.info}>
          <h2 className={styles.logo}>CineVerso</h2>
          <p className={styles.text}>
            Explorando o universo do cinema — filmes em alta, lançamentos e os
            mais bem avaliados, tudo em um só lugar. Sua jornada cinematográfica começa aqui.
          </p>
        </div>

        {/* Navegação */}
        <div className={styles.links}>
          <h3 className={styles.title}>Navegação</h3>
          <Link href="/" className={styles.link}>
            Início
          </Link>
          <Link href="/pages/NowPlaying" className={styles.link}>
            Em Cartaz
          </Link>
          <Link href="/pages/TopRated" className={styles.link}>
            Mais Bem Avaliados
          </Link>
          <Link href="/pages/Upcoming" className={styles.link}>
            Próximas Estreias
          </Link>
          <Link href="/pages/aboutUs" className={styles.link}>
            Sobre Nós
          </Link>
        </div>

        {/* Conecte-se */}
        <div className={styles.social}>
          <h3 className={styles.title}>Conecte-se</h3>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span>TMDB</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span>Instagram</span>
          </a>
        </div>

        {/* Legal */}
        <div className={styles.legal}>
          <h3 className={styles.title}>Legal</h3>
          <Link href="/privacy" className={styles.link}>
            Política de Privacidade
          </Link>
          <Link href="/terms" className={styles.link}>
            Termos de Uso
          </Link>
          <Link href="/cookies" className={styles.link}>
            Cookies
          </Link>
        </div>
      </div>

      {/* Créditos finais */}
      <div className={styles.bottom}>
        <div className={styles.credits}>
          <p>© {new Date().getFullYear()} CineVerso. Todos os direitos reservados.</p>
          <span>•</span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tmdbBadge}
          >
            Dados por TMDB
          </a>
        </div>
      </div>
    </footer>
  );
}
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>CineVerso</h1>

        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
        <label htmlFor="menu-toggle" className={styles.menuButton}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/pages/NowPlaying" className={styles.link}>Em cartaz</Link>
          <Link href="/pages/TopRated" className={styles.link}>Mais bem avaliados</Link>
          <Link href="/pages/Upcoming" className={styles.link}>Próximas estreias</Link>
          <Link href="/pages/aboutUs" className={styles.link}>Sobre nós</Link>
        </nav>
      </div>
    </header>
  );
}

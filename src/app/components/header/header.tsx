import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <h1 className={styles.logo}>
          NewsPress
        </h1>

        <input
          type="checkbox"
          id="menu-toggle"
          className={styles.menuToggle}
        />
        <label htmlFor="menu-toggle" className={styles.menuButton}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </label>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Início</Link>
          <Link href="/articles" className={styles.link}>Artigos</Link>
          <Link href="/about" className={styles.link}>Sobre</Link>
          <Link href="/contact" className={styles.link}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}

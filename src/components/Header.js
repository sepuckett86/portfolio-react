import React from 'react';
import styles from './Header.css';

// Only show when scrolled down. Also, position absolute??
function Header() {
  return (
    <header className={styles.Header}>
      <a className={styles.name} href="/">Hello and welcome!</a>
      <ul>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;

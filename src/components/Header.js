import React from 'react';
import styles from './Header.css';

// Only show when scrolled down. Also, position absolute??
function Header() {
  return (
    <header className={styles.Header}>
      <p className={styles.name}>Hello and welcome!</p>
      <ul>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;

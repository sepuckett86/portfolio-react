import React from 'react';
import styles from './Header.css';

// Only show when scrolled down. Also, position absolute??
function Header() {
  return (
    <header className={styles.Header}>
      <p className={styles.name}>Susan Puckett</p>
      <ul>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </header>
  );
}

export default Header;

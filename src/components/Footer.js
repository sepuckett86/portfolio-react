import React from 'react';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      Website Created by Susan Puckett
      <div className={styles.updated}>Last updated May 2021</div>
    </footer>
  );
}

export default Footer;

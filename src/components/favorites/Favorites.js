import React from 'react';
import PropTypes from 'prop-types';
import styles from './Favorites.css';

export default function Favorites({ links }) {
  const linkItems = links.map(link => (
    <li key={link.url}>
      <p><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a> | {link.purpose}</p>
    </li>
  ));

  return (
    <>
    <section className={styles.Favorites}>
      <h2>Goodies 😊</h2>
      <p>Since you made it this far...</p>
      <hr />
      <h3>My Favorite Things on the Internet</h3>
      <ul>
        {linkItems}
      </ul>
      <hr />
      <h3>VSCode Shortcuts for Mac</h3>
      <h4>Guide to symbols:</h4>
      <p><code>^</code> control</p>
      <p><code>⌘</code> command</p>
      <h4>Shortcuts:</h4>
      <p><code>⌘ 0</code> go from main window to side bar</p>
      <p><code>⌃ 0</code> go from side bar to main window</p>
    </section>
    </>
  );
}

Favorites.propTypes = {
  links: PropTypes.array.isRequired
};

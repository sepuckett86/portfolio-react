import React from 'react';
import PropTypes from 'prop-types';
import styles from './Goodies.css';

export default function Goodies({ links }) {
  const linkItems = links.map(link => (
    <li key={link.url}>
      <p><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a> | {link.purpose}</p>
    </li>
  ));

  return (
    <>
    <section id="goodies" className={styles.Favorites}>
      <h2>Goodies 😊</h2>
      <p>Since you made it this far...</p>
      <hr />
      <h3 id="favorites">My Favorite Things on the Internet</h3>
      <ul>
        {linkItems}
      </ul>
      <hr />
      <h3 id="shortcuts">VSCode Shortcuts for Mac</h3>
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

Goodies.propTypes = {
  links: PropTypes.array.isRequired
};

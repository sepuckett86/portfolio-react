import React from 'react';
import PropTypes from 'prop-types';
import styles from './Goodies.css';

export default function Goodies({ links, shortcuts }) {
  const linkItems = links.map(link => (
    <li key={link.url}>
      <p><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a> | {link.purpose}</p>
    </li>
  ));

  const shortcutItems = shortcuts.map(shortcut => (
    <li key={shortcut.keys}>
      <p><code>{shortcut.keys}</code> {shortcut.description}</p>
    </li>
  ));

  return (
    <section id="goodies" className={styles.Goodies}>
      <h2>Goodies 😊</h2>
      <p>Since you made it this far...</p>
      <hr />
      <div className={styles.partition}>
        <h3 id="favorites">My Favorite Things on the Internet</h3>
        <ul>
          {linkItems}
        </ul>
      </div>
      <hr />
      <div className={styles.partition}>
        <h3 id="shortcuts">VSCode Shortcuts for Mac</h3>
        <div className={styles.partition}>
          <h4>Guide to symbols:</h4>
          <p><code>^</code> control</p>
          <p><code>⌘</code> command</p>
          <p><code>⇧</code> shift</p>
          <p><code>⌥</code> option</p>
        </div>
        <div className={styles.partition}>
          <h4>Shortcuts:</h4>
          <ul>
            {shortcutItems}
          </ul>
        </div>
      </div>
    </section>
  );
}

Goodies.propTypes = {
  links: PropTypes.array.isRequired,
  shortcuts: PropTypes.array.isRequired
};
